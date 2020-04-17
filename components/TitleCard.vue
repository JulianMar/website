<template>
  <main
    class="flex flex-col bg-white background rounded-lg shadow-2xl md:flex-row"
  >
    <img
      class="rounded-full mx-auto w-1/2 mt-4 md:rounded-l-lg md:rounded-r-none md:m-0 md:w-4/12"
      src="~/assets/img/me_small.jpg"
      alt="picture of me"
      rel="preload"
    />

    <div>
      <div class="mt-4 mb-2 mx-4 text-center md">
        <p class="text-4xl">Hi! I am Julian</p>

        <div class="w-11/12 mx-auto h-2 bg-yellow-300"></div>

        <p class="text-xl">Full-Stack Developer</p>
      </div>

      <div
        class="mt-2 mx-4 mb-4 md:mt-4 md:flex md:flex-wrap md:justify-center"
      >
        <Tag
          v-for="(item, index) in items"
          :key="index"
          :icon="item.icon"
          :description="item.description"
          :link="item.link"
          :alt="item.alt"
          class="md:w-1/2 md:mx-auto"
        ></Tag>

        <p class="text-purple-800 text-lg mt-4 text-center w-full">
          Every error is a opportunity to learn something new
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import Tag from './Tag'

export default {
  components: {
    Tag,
  },

  data: () => ({
    items: [
      {
        icon: '/icon-location-pin.svg',
        description: 'Vorarlberg, Austria',
        link: '',
        alt: 'Location',
      },
      {
        icon: '/icon-work.svg',
        description: 'Russmedia Digital',
        link: 'https://laendlepunkte.at',
        alt: 'Work',
      },
      {
        icon: '/icon-desktop.svg',
        description: 'Nuxt.js, Vue.js, Tailwindcss',
        link: '',
        alt: 'Frontend Technologies',
      },
      {
        icon: '/icon-application.svg',
        description: 'Laravel, Typescript, Go',
        link: '',
        alt: 'Backend Technologies',
      },
      {
        icon: '/icon-database.svg',
        description: 'MySQL, SQLite, Crate.io, Hyperledger Fabric',
        link: '',
        alt: 'Database Technologies',
      },
      {
        icon: '/icon-server.svg',
        description: 'Kubernetes, Docker, Linux',
        link: '',
        alt: ' Server Technologies',
      },
    ],
  }),
}
</script>
