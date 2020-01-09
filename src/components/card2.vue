<template>
  <v-container>
    <v-row outlined color="blue">
      <v-col v-for="card in cards" :key="card.id" cols="12" lg="3">
          <v-hover v-slot:default="{ hover }">
        <v-card shaped class="mx-auto overlay" max-width="400" :elevation="hover ? 12 : 2">
          <v-img class="white--text align-end" height="200px" :src="card.images[0]">
           
          </v-img>

          <v-card-subtitle class="pb-0" style="font-size:24px;">{{card.title}}</v-card-subtitle>

          <v-card-text class="text--primary">
            {{ card.description }}
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="orange" text>More</v-btn>
          </v-card-actions>
        </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
  
</template>


<script>
import axios from 'axios'
  export default {
    name: "card2",
    data: () => ({
      cards: null
    }),
    methods: {
      getSite: async function () {
        const params = {
          id: this.$route.params.id
        }
        let response = await axios.get('https://armenian-travel.herokuapp.com/getSites', { params })
        this.cards = response.data['cards']
      }
    },
    created() {
      this.getSite();
    }
  }
</script>