<template>
  <main
    class="flex flex-col bg-white rounded-lg shadow-2xl background md:flex-row"
  >
    <img
      class="w-1/2 mx-auto mt-4 rounded-full h-2/5 aspect-square min-width-1/2 md:rounded-l-lg md:rounded-r-none md:m-0 md:w-4/12 md:h-full"
      src="/img/me_small.jpeg"
      alt="picture of me"
      rel="preload"
    />

    <div class="md:w-8/12">
      <div class="mx-4 mt-4 mb-2 text-center md">
        <p class="text-4xl">Hi! I am Julian</p>

        <div class="w-11/12 h-1 mx-auto bg-yellow-200 rounded-md" />

        <p class="text-xl">Full-Stack Developer</p>
      </div>

      <div
        class="mx-4 mt-2 mb-4 md:mt-4 md:flex md:flex-wrap md:justify-center"
      >
        <Tag
          v-for="(item, index) in items"
          :key="index"
          :icon="item.icon"
          :description="item.description"
          :link="item.link"
          :alt="item.alt"
          class="md:w-1/2 md:mx-auto"
        />

        <p class="w-full mt-4 text-lg text-center text-purple-600">
          Every bug is an opportunity to learn something new
        </p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Tag from "./Tag.vue";

export default defineComponent({
  components: {
    Tag,
  },

  data: () => ({
    items: [
      {
        icon: "/icon/location-pin.svg",
        description: "Vorarlberg, Austria",
        link: "",
        alt: "Location",
      },
      {
        icon: "/icon/work.svg",
        description: "Russmedia Digital",
        link: "https://laendlepunkte.at",
        alt: "Work",
      },
      {
        icon: "/icon/desktop.svg",
        description: "Nuxt.js, Vue.js, Tailwindcss",
        link: "",
        alt: "Frontend Technologies",
      },
      {
        icon: "/icon/application.svg",
        description: "Laravel, Typescript, Go",
        link: "",
        alt: "Backend Technologies",
      },
      {
        icon: "/icon/database.svg",
        description: "MySQL, SQLite, Crate.io",
        link: "",
        alt: "Database Technologies",
      },
      {
        icon: "/icon/server.svg",
        description: "Kubernetes, Docker, Gitlab CI, Linux",
        link: "",
        alt: " Server Technologies",
      },
    ],
  }),
});
</script>
