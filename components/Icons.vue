<template>
  <div>
    <div class="grid grid-cols-3 gap-2 mx-auto justify-items-center">
      <github class="w-10 h-10 hover:scale-125" />
      <linkedin class="w-10 h-10 hover:scale-125" />
      <lastfm class="w-10 h-10 hover:scale-125" />
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
import Github from "./icons/Github.vue";
import Linkedin from "./icons/Linkedin.vue";
import Lastfm from "./icons/Lastfm.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {
    Github,
    Linkedin,
    Lastfm,
  },
});
</script>
