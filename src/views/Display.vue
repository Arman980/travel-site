<template>
  <div class="display">
    <v-row>
      <v-col cols="12" md="8" class="pt-0">
        <v-carousel height="auto" hide-delimiter-background show-arrows-on-hover>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <!-- <img :src="item.src" style="width:100%;height:auto"/> -->
            <v-img :src="item.src" ></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" md="4">
        <h2 style="text-align: center">Tatev</h2>
        <p class="pa-5">
          The Tatev Monastery is a 9th-century Armenian Apostolic monastery located on a large basalt plateau near the Tatev village in Syunik Province in southeastern Armenia. The term "Tatev" usually refers to the monastery. The monastic ensemble stands on the edge of a deep gorge of the Vorotan River. Tatev is known as the bishopric seat of Syunik and played a significant role in the history of the region as a center of economic, political, spiritual and cultural activity.
          In the 14th and 15th centuries, the monastery hosted one of the most important Armenian medieval universities, the University of Tatev, which contributed to the advancement of science, religion and philosophy, reproduction of books and development of miniature painting. Scholars of the Tatev University contributed to the preservation of Armenian culture and creed during one of its most turbulent periods in its history.
          The monastery is the "best-known site" in Syunik. Wings of Tatev, a cableway from Tatev to Halidzor village was opened in October 2010. It was included in the Guinness World Records as world's "longest non-stop double track cable car."
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
export default {
  name: "display",
  components: {
    
  },
  data() {
    return {
      items: [
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/c/cd/Tatev_Monastery_from_a_distance.jpg"
        },
        {
          src:
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/8e/72/94.jpg?fit=crop&w=320&h=140"
        },
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Monasterio_de_Tatev%2C_Armenia%2C_2016-10-01%2C_DD_83-85_HDR.jpg/700px-Monasterio_de_Tatev%2C_Armenia%2C_2016-10-01%2C_DD_83-85_HDR.jpg"
        },
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/%D0%94%D0%B2%D0%BE%D1%80_%D0%A2%D0%B0%D1%82%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8F.jpg/2560px-%D0%94%D0%B2%D0%BE%D1%80_%D0%A2%D0%B0%D1%82%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BC%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8F.jpg"
        },
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/e/e1/Tatev_dome.jpg"
        },
      ]
    };
  }
};
</script>
