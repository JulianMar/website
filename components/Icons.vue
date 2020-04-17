<template>
  <div>
    <div class="flex justify-around">
      <github class="h-10 w-10 hover:w-12 hover:h-12" />
      <linked-in class="h-10 w-10" />
      <lastfm class="h-10 w-10" />
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

<script>
import Github from './icons/Github'
import LinkedIn from './icons/LinkedIn'
import Lastfm from './icons/Lastfm'

export default {
  components: {
    Github,
    LinkedIn,
    Lastfm,
  },
}
</script>

<style></style>
