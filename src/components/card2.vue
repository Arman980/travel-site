<template>
  <v-container class="card2">
    <v-row outlined color="blue">
      <v-col v-for="card in cards" :key="card.id" cols="12" lg="3">
          <v-hover v-slot:default="{ hover }">
        <v-card shaped class="mx-auto overlay" max-width="400" :elevation="hover ? 12 : 2">
          <v-img class="white--text align-end" height="200px" :src="card.src">
           
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
    <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{icon}}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-container>
  
</template>


<script>
  export default {
    name: "card2",
    data: () => ({
icons: [
        'mdi-facebook-box',
        'mdi-twitter-box',
        'mdi-linkedin-box',
        'mdi-instagram',
      ],



      cards: [
        {
        src: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Tatev_Monastery_from_a_distance.jpg",
        title: "Tatev Monastery",
        id: "1",
        description: "esdessdssdds"
      },
      {
        src: "https://janarmenia.com/wp-content/uploads/2019/06/noravanq-monastery-1.jpg",
        title: "Noravank Monastery",
        id: "2",
        description: "esdessdssdds"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Garni_Temple_02.JPG",
        title: "Garni Monastery",
        id: "3",
        description: "esdessdssdds"
      }
      ]
    })
  };
</script>
<style >
.container.card2 {
  margin-top: 11%;
}
</style>