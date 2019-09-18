<template>
  <div class="h-screen relative flex flex-col bg-yellow-300">
    <div
      class="w-4/5 mx-auto h-full relative wrapper my-auto"
      :class="{ back: !titleCard }"
      @click="turnCard()"
    >
      <title-card class="card my-auto" />
      <backside-card class="card back" />
    </div>

    <div class="icons w-full h-10 mt-auto mb-4 md:self-end md:w-64">
      <icons />
    </div>
  </div>
</template>

<script>
import TitleCard from '@/components/TitleCard'
import BacksideCard from '@/components/BacksideCard'
import Icons from '@/components/Icons'

export default {
  components: {
    TitleCard,
    BacksideCard,
    Icons
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

.mt-10vh {
  margin-top: 10vh;
}
</style>
