<template>
  <div class="h-screen flex justify-center items-center bg-yellow-300">
    <div
      class="w-1/2 h-100 flex bg-white background rounded-lg shadow-2xl"
      @click="turnCard"
    >
      <div class="w-7/12 h-100">
        <div class="p-4 flex flex-col justify-center w-full h-40 rounded-tl-lg">
          <p class="text-4xl">Hi! I am Julian</p>
          <p class="text-xl">Full-Stack Developer</p>
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
        <img class="h-100 rounded-r-lg" src="/me.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    turnCard() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.h-100 {
  height: 20rem;
}

a {
  font-weight: 800;
}
</style>
