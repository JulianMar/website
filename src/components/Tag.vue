<template>
  <div class="flex mt-4">
    <img class="w-6 h-6" :src="icon" :alt="alt" />
    <component
      :is="linkSet ? 'a' : 'p'"
      :href="link"
      :class="{ 'font-normal': linkSet }"
      class="ml-4"
    >
      {{ description }}
    </component>
  </div>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity"
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },

  setup(props) {
      return {
          linkSet: computed(() => props.link !== '')
      }
  }
})
</script>
