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

          <br />
          <v-parallax
            src="https://www.tsarvoyages-caucase.com/images/destinations/1918/dreamstime%20(c)%20monast%C3%A8re.jpg"
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
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-card-title>Arman Gasparyan</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">Front End Developer</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>From Yerevan</div>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "About",

  data: () => ({})
};
</script>