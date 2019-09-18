<template>
  <div
    class="h-100 flex flex-row-reverse bg-white background rounded-lg shadow-2xl"
  >
    <div class="w-7/12 h-100">
      <div class="p-4 flex flex-col justify-center w-full h-40 rounded-tl-lg">
        <p class="text-4xl">Hi! I am Julian</p>
      </div>
      <div class="p-4 w-full h-40 bg-gray-200 rounded-bl-lg">
        <p>
          I work at
          <a href="https://laendlepunkte.at">Russmedia Digital</a> in
          Vorarlberg, Austria.
        </p>
        <p>
          I am an experienced Developer with
          <a v-for="item in stack" :key="item.url" :href="item.url">
            {{ item.name }},
          </a>
          and <router-link to="stack">more</router-link>
        </p>
      </div>
    </div>
    <div class="w-5/12 h-100 flex justify-end">
      <img class="h-100 rounded-l-lg" src="/me.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stack: [
        {
          url: 'https://laravel.com',
          name: 'Laravel'
        },
        {
          url: 'https://nodejs.org',
          name: 'nodejs'
        },
        {
          url: 'https://vuejs.org',
          name: 'vue.js'
        },
        {
          url: 'https://nuxtjs.org',
          name: 'nuxt.js'
        }
      ]
    }
  }
}
</script>
