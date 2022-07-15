<template>
  <div class="relative flex flex-col h-screen bg-yellow-200">
    <title-card
      class="w-4/5 max-w-4xl mx-auto mt-4 overflow-auto md:mt-auto wrapper md:h-80 md:max-h-80 md:overflow-hidden"
    />

    <div class="w-full h-10 mt-auto mb-4 icons md:self-end md:w-64">
      <icons />
    </div>
  </div>
</template>

<script lang="ts">
import TitleCard from "./components/TitleCard.vue";
import Icons from "./components/Icons.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: {
    TitleCard,
    Icons,
  },
  setup() {
    useHead({
      title: "Julian Martin",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content: "Hi, I am Julian Martin a Software Developer from Austria",
        },
      ],
    });
  },
});
</script>

<style>
a {
  font-weight: 800;
}

.wrapper {
  transform-style: preserve-3d;
  transition: all 1s ease;
}

.mt-10vh {
  margin-top: 10vh;
}
</style>
