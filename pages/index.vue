<template>
  <div class="h-screen flex justify-center items-center bg-yellow-300">
    <div
      class="w-1/2 h-100 relative wrapper"
      :class="{ back: !titleCard }"
      @click="turnCard()"
    >
      <title-card class="card" />
      <backside-card class="card back" />
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

.wrapper {
  transform-style: preserve-3d;
  transition: all 1s ease;
}

.card {
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  overflow: hidden;
}

.back {
  transform: rotateY(180deg);
}
</style>
