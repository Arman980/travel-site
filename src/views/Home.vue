<template>
  <div class="home">
    <card2/>
  </div>
</template>

<script>
import card2 from '../components/card2'
// @ is an alias to /src
export default {
  name: 'home',
  components: {
    card2
  },
   data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
}
</script>


 
   


