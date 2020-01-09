<template>
  <div class="display">
    <v-row>
      <v-col cols="12" md="8" class="pa-0">
        <v-carousel height="auto" hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item
            v-for="(src,i) in site.pictures"
            :key="i"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-img :src="src" ></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" md="4">
        <h2 style="text-align: center">{{ site.title }}</h2>
        <p class="ma-5">
          {{ site.description }}
        </p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="8">
        <div class="my-2">
          <v-btn block x-large color="success" dark>BOOK TOUR NOW</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "display",
  components: {
    
  },
  data() {
    return {
      site: null
    }
  },
  methods: {
    getSite: async function () {
      const params = {
        id: this.$route.params.id
      }
      let response = await axios.get('https://armenian-travel.herokuapp.com/getInfo', { params })
      this.site = response.data['info']
    }
  },
  created() {
    this.getSite();
  }
};
</script>
