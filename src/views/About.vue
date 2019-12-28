<template>
  <v-container>
    <div class="about">
      <v-row>
        <v-col cols="12">
          <h1 style="text-align: center">About Travel Site</h1>
          <v-row justify="center">
            <v-col cols="8">
              <v-divider></v-divider>
            </v-col>
          </v-row>
          <v-carousel
            cycle
            height="250"
            hide-delimiter-background
            show-arrows-on-hover
            interval="3000"
          >
            <v-carousel-item  v-for="(slide, i) in slides" :key="i" :src="slide.src" style="color:re">
                <v-container fill-height class="img_overlay">
                  <v-row justify="end"> 

                    <v-col cols="3">
                      <h3 class="display-3">{{ slide.title }}</h3>
                    </v-col>
                  </v-row>
                 
                </v-container>
            </v-carousel-item>
          </v-carousel>
        

          <br />
          <v-parallax
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
          ></v-parallax>
        </v-col>
        <v-col cols="12">
          <p>
            We are a tour operator that offers a wide range of tours and activities in Armenia,
            from classic sightseeing excursions to adventure and special tours tailored to your needs and interests.
            Our tour programs cover entire Armenia from north to south, offering travelers an opportunity to not just touch the surface of the country,
            but to experience Armenia as it is. We want to show you Armenia the way we see and feel it!
          </p>

          <p>
            For us, Armenia isn't what one can see on glossy postcards. Armenia is a hidden treasure,
            it's in every rock and tree, river and lake, house and street, village and town, in every glass of wine raised to friendship and in every smile on people's faces.
          </p>

          <p>
            Armenia is small in size, it occupies an area of about 30000 square kilometers. And yet Armenia is very diverse.
            The country is different in the north, south and center. The north, with its lush green forests and serene landscapes is a place to soothe your mind and soul.
            Its meditative tranquility boosts the creative force within. The south of Armenia, with its ancient historical and spiritual sites , symbolizes our unbroken spirit.
            The center of Armenia, a link between the north and south, is the heart of the country, the source of origin of Armenian art and culture.
          </p>

          <p>
            Explore Armenia following our unique routes and discover what fascinates us most about this land, visit sites of sacred energy, ancient,
            powerful and all-embracing, feel the spirit of Armenia, absorb Armenia with each new experience, connect with people and make new friends.
            We are Travel Site, and we invite you to join us on a mesmerizing journey around Armenia!
          </p>
        </v-col>
      </v-row>

      <v-row justify="center">
        <h1>Our Team</h1>
      </v-row>
      <p>
        <v-divider></v-divider>
      </p>

      <v-row justify="center">
        <v-col cols="10" md="4">
          <v-card>
            <v-img
              class="white--text align-end"
              height="200px"
              width="600px"
              src="IMG_20191228_175622.jpg"
            >
              <v-card-title>Arman Gasparyan</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Front End Developer</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>From Yerevan</div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="10" md="4">
          <v-card>
            <v-img
              class="white--text align-end"
              height="200px"
              src="data:image/jpeg;base64,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"
            >
              <v-card-title>Erik Movsisyan</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Back End Developer</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>From Yerevan</div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="10" md="4">
          <v-card>
            <v-img
              class="white--text align-end"
              height="200px"
              src="data:image/jpeg;base64,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"
            >
              <v-card-title>Khoren Hakobyan</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">Front End Developer</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>From Chambarak</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>



<script>
export default {
  name: "About",
  data: () => ({

    slides: [ {title: 'Winter holidays', src:
          "https://www.laajis.fi/wp-content/uploads/2018/08/2000x500-180815-kausikortti.jpg"}, 
            {title: 'Time to extreme', src:
          "https://s14761.pcdn.co/wp-content/uploads/2019/09/Dolomites-Bike-Weeks-Olang-Bike-Road-Rennrad-EMTB-32-von-165-2000x500.jpg"}, 
            {title: 'Dont be busy', src:
          "https://www.jotform.com/blog/wp-content/uploads/2019/12/jessica-lewis-fJXv46LT7Xk-unsplash-compressor-2000x500.jpg"}, 
            {title: 'Time to be happy', src:
          "http://world-odyssey.com/wp-content/uploads/2016/07/zip-wire-e1531221279907-2000x500.jpg"},
    ]
  })
};
</script>

<style scoped>
  .img_overlay {
    background: rgba(155, 155, 155, 0.4);
    color: white
  }
</style>