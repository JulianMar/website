// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-bugsnag'],
  bugsnag: {
    publishRelease: false,
    baseUrl: 'https://julian-martin.com',
    config: {
      apiKey: '317c3d7013a3dc4a9e152138bfe8c900',
      enabledReleaseStages: ['staging', 'production'],
      releaseStage: process.env.NODE_ENV,
      appVersion: '1.1',
    },
  },
  sourcemap: { server: true, client: true },
});
