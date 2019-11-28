<template>
  <div class="h-screen relative flex flex-col bg-yellow-300">
    <title-card
      class="w-4/5 mx-auto mt-auto wrapper mt-4 overflow-auto h-80 sm:h-full md:h-100 md:overflow-hidden md:max-w-4xl"
    />

    <div class="icons w-full h-10 mt-auto mb-4 md:self-end md:w-64">
      <icons />
    </div>
  </div>
</template>

<script>
import TitleCard from '@/components/TitleCard'
import Icons from '@/components/Icons'

export default {
  components: {
    TitleCard,
    Icons
  }
}
</script>

<style>
.h-80 {
  max-height: 85%;
}

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
