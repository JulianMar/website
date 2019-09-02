<template>
  <div class="h-screen flex justify-center items-center bg-yellow-300">
    <div class="w-full flex justify-center" @click="turnCard()">
      <title-card v-if="titleCard" />
      <transition name="fade">
        <backside-card v-if="!titleCard" />
      </transition>
    </div>
  </div>
</template>

<script>
import TitleCard from '@/components/TitleCard'
import BacksideCard from '@/components/BacksideCard'

export default {
  components: {
    TitleCard,
    BacksideCard
  },

  data() {
    return {
      titleCard: true
    }
  },

  methods: {
    turnCard() {
      this.titleCard = !this.titleCard
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
