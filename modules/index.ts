import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  isNuxt3,
  extendViteConfig,
} from '@nuxt/kit';
import { browser, node } from '@bugsnag/source-maps';
import { BrowserConfig } from '@bugsnag/js';

const { resolve } = createResolver(import.meta.url);
export interface ModuleOptions {
  disabled: boolean;
  publishRelease: boolean;
  baseUrl: string;
  projectRoot: string;
  config:
    | {
        apiKey: string;
        notifyReleaseStages?: string[];
        environment?: string;
        appVersion?: string;
      }
    | Partial<BrowserConfig>;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-bugsnag',
    configKey: 'bugsnag',
    compatibility: {
      nuxt: '^3.0.0-rc.10 || ^3.0.0 || ^2.16.0',
      bridge: true,
    },
  },
  defaults: {
    disabled: false,
    publishRelease: false,
    baseUrl: 'http://localhost:3000',
    config: {
      notifyReleaseStages: [],
      apiKey: '',
      environment: 'production',
      appVersion: '1.0.0',
    },
    projectRoot: '/',
  },
  setup(options, nuxt) {
    if (options.disabled) {
      return;
    }

    if (isNuxt3()) {
      nuxt.options.runtimeConfig.public.bugsnag = options.config as any;
    } else {
      nuxt.options.publicRuntimeConfig.bugsnag = options.config as any;
    }

    extendViteConfig((config) => {
      config.optimizeDeps?.include?.push(
        ...['@bugsnag/plugin-vue', '@bugsnag/js']
      );
    });

    if (!options.publishRelease || nuxt.options.dev) {
      return;
    }

    nuxt.options.sourcemap = { server: true, client: true };

    nuxt.addHooks({
      'nitro:config': (config) => {
        console.log(config.hooks);
        config.hooks = {
          compiled: async (nitro) => {
            nitro.logger.log(nitro);
            nitro.logger.log('');
            nitro.logger.start('upload of sourcemaps to bugsnag \n');
            const promises: Promise<void>[] = [];

            // promises.push(
            // await node.uploadMultiple({
            //   apiKey: options.config.apiKey!,
            //   appVersion: options.config.appVersion,
            //   directory: nitro.options.output.serverDir,
            //   logger: nitro.logger,
            //   overwrite: true,
            //   projectRoot: options.projectRoot,
            // });
            // );

            nitro.logger.start(
              'first upload done to' +
                nitro.options.output.serverDir +
                ' ' +
                options.projectRoot +
                ' \n'
            );

            // promises.push(
            // await browser.uploadMultiple({
            //   apiKey: options.config.apiKey!,
            //   appVersion: options.config.appVersion,
            //   directory: nitro.options.output.publicDir,
            //   logger: nitro.logger,
            //   overwrite: true,
            //   baseUrl: options.baseUrl,
            // });
            // // );

            // nitro.logger.start(
            //   'first upload done to' +
            //     nitro.options.output.publicDir +
            //     ' ' +
            //     options.baseUrl +
            //     ' \n'
            // );

            await Promise.all(promises);

            nitro.logger.log('');
            nitro.logger.success('upload of sourcemaps to bugsnag \n');
          },
        };
      },
    });
  },
});
