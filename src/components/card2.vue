<template>
  <v-container>
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
  </v-container>
  
</template>


<script>
  export default {
    name: "card2",
    data: () => ({
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