<template>
  <div class="display">
    <v-row v-if="loading" class="text-center" justify="center">
      <v-col cols="3">
        <v-progress-circular indeterminate :size="70" :width="7" color="primary"></v-progress-circular>
      </v-col>
    </v-row>
    <v-row v-if="!loading">
      <v-col cols="12" md="8" class="pa-0">
        <v-carousel height="auto" hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item
            v-for="(src,i) in site.images"
            :key="i"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-img :src="src"></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" md="4">
        <h2 style="text-align: center">{{ site.title }}</h2>
        <v-card style="border:1px solid black ">
          <v-container>
            <v-radio-group v-model="radios" :mandatory="false">
              <v-radio label="Budget" value="350$"></v-radio>
              <hr />
              <v-radio label="Business" value="450$"></v-radio>
              <hr />
              <v-radio label="Premium" value="600$"></v-radio>
              <hr />
              <p style="color:green; font-size: 18px; margin-top: 10px">Duration   3 days </p>
              <p style="color:green; font-size: 18px; margin-top: 10px">Price from {{ radios || 'null' }}</p>
            </v-radio-group>
            <v-select :items="items" label="Choose a day"></v-select>
            <v-textarea
              v-model="message"
              label="Additional notes"
              counter="50"
              outlined
              clearable=""
              name="input-7-4"
              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
            ></v-textarea>
            <div class="my-2">
              <v-btn  :loading="loading1"
      :disabled="loading1" @click = "loader = 'loading',clear()" block x-large color="success" dark>BOOK TOUR NOW</v-btn>
            </div>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="!loading">
              <v-col cols="12">
        <h2 style="text-align: center">Description</h2>
        <p class="ma-5">{{ site.description }}</p>
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
      loader: null,
      loading1: false,
      radios: "350$",
      site: null,
      items: [
        "22 Jan, 2020 - 25 Jan, 2020",
        "31 Jan, 2020 - 02 Fab, 2020",
        "05 Jan, 2020 - 08 Fab, 2020"
      ],
      loading: true,
      message: null
    }
  },
   watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    },
  methods: {
    getSite: async function () {
      const params = {
        id: this.$route.params.id
      }
      let response = await axios.get('https://armenian-travel.herokuapp.com/getInfo', { params })
      this.site = response.data['info']
      this.loading = false
     },
     clear: function () {
       this.message = null
     }
  },
  created() {
    this.getSite();
  }
};
</script>
