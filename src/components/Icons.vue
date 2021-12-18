<template>
  <div>
    <div class="flex justify-around">
      <github class="w-10 h-10 hover:w-12 hover:h-12" />
      <linked-in class="w-10 h-10 hover:w-12 hover:h-12" />
      <lastfm class="w-10 h-10 hover:w-12 hover:h-12" />
    </div>
    <div class="hidden">
      <div>
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik"
          >Freepik</a
        >
        from
        <a href="https://www.flaticon.com/" title="Flaticon"
          >www.flaticon.com</a
        >
      </div>

      <div>
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik"
          >Freepik</a
        >
        from
        <a href="https://www.flaticon.com/" title="Flaticon"
          >www.flaticon.com</a
        >
      </div>

      <div>
        Icons made by
        <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy"
          >Dave Gandy</a
        >
        from
        <a href="https://www.flaticon.com/" title="Flaticon"
          >www.flaticon.com</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Github from './icons/Github.vue'
import LinkedIn from './icons/LinkedIn.vue'
import Lastfm from './icons/Lastfm.vue'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  components: {
    Github,
    LinkedIn,
    Lastfm,
  },
})
</script>
