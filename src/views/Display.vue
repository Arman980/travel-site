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
            <v-img :src="src"></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" md="4">
        <h2 style="text-align: center">{{ site.title }}</h2>
        <p class="ma-5">{{ site.description }}</p>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-card style="border:1px solid black ">
          <v-container>
          <v-radio-group v-model="radios" :mandatory="false">
            <v-radio label="Budget" value="radio-1"></v-radio>
            <hr>
            <v-radio label="Business" value="radio-2"></v-radio>
             <hr>
            <v-radio label="Premium" value="radio-3"></v-radio>
             <hr>
          </v-radio-group>
          <h2 style="font-size: 18px;">Duration 3 days</h2>
          <h2 style="font-size: 18px">Price from 650$</h2>
          <v-select :items="items" label="Choose a day"></v-select>
           <v-textarea
                      v-model="message"
                      label="Additional notes"
                      counter="50"
                      outlined
                      name="input-7-4"
                      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                    ></v-textarea>
          <div class="my-2">
            <v-btn block x-large color="success" dark>BOOK TOUR NOW</v-btn>
          </div>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "display",
  components: {},
  data() {
    return {
      radios: "radio-1",

      site: null,
      items: [
        "22 Jan, 2020 - 25 Jan, 2020",
        "31 Jan, 2020 - 02 Fab, 2020",
        "05 Jan, 2020 - 08 Fab, 2020"
      ]
    };
  },
  methods: {
    getSite: async function() {
      let response = await axios.get(
        "https://armenian-travel.herokuapp.com/getSite"
      );
      this.site = response.data["site"];
    }
  },
  created() {
    this.getSite();
  }
};
</script>
