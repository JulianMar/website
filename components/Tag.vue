<template>
  <div class="flex mt-4">
    <img class="w-6 h-6" :src="icon" :alt="alt" />
    <component
      :is="linkSet ? 'a' : 'p'"
      :href="link"
      :class="{ 'font-normal': linkSet }"
      class="ml-4"
      >{{ description }}</component
    >
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },

  computed: {
    linkSet() {
      return this.link !== ''
    }
  }
}
</script>

<style></style>
