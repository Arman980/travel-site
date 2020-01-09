<template>
  <div class="about">
    <v-row justify="center">
      <v-col cols="12">
        <h1 style="text-align: center">About Travel Site</h1>
        <v-row justify="center">
          <v-col cols="7" md="1">
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
          <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src" style="color:re">
            <v-container fluid fill-height class="img_overlay">
              <v-row justify="end">
                <v-col cols="12" md="3">
                  <h3 class="display-3">{{ slide.title }}</h3>
                </v-col>
              </v-row>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="11">
        <h1 style="font-size:4vw; text-align: start; color: gray">COMPANY</h1>
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

    <v-parallax src="12.jpg" height="250">
      <v-row justify="center" align="start" class="text-center">
        <v-col cols="12" md="6">
          <h1 style="font-family: algerian; font-size: 60px; color:black;">Our Team</h1>
        </v-col>
      </v-row>
    </v-parallax>

    <p></p>

    <v-row justify="space-around" class="text-center">
      <v-col cols="10" md="2">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="https://kasadeeallan.files.wordpress.com/2017/06/best-sketch-comedy-tv-shows-824x681.jpg" alt="Avatar" style="width:300px;height:300px;" />
            </div>
            <div class="flip-card-back">
              <h1>Arman Gasparyan</h1>
              <p>back end devoloper</p>
              <p>from Yerevan</p>
              <p>I'm Arman Gasparyan. I'm 13 years old. I've been living in Armenia since i was born. I've been learning in TUMO for a year. It's still fun to go there, because without it i wouldn't be making this website :-)</p>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="10" md="2">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--vDL2tedpb9vahxJ9CZHnIzrfRm9F2OwwKqLQf85tyV3lJmn&s" alt="Avatar" style="width:300px;height:300px;" />
            </div>
            <div class="flip-card-back">
              <h1>Khoren Hakobyan</h1>
              <p>front end devoloper</p>
              <p>from Chambarak</p>
              <p>I'm Khoren Hakobyan. I'm 20 years old. I've been living in Armenia since i was born. I've been working in TUMO for 1 year. It's still fun to go there, because without it i wouldn't be making this website :-)</p>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="10" md="2">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuVBd4CriElQM-KCmLgcgQtND920EfFrWbW59EOPJk5M5Y1Bs&s"
                alt="Avatar"
                style="width:300px;height:300px;"
              />
            </div>
            <div class="flip-card-back">
              <h1>Erik Movsesyan</h1>
              <p>front end devoloper</p>
              <p>from Yerevan</p>
              <p>I'm Erik Movsesyan. I'm 16 years old. I've been living in Armenia since i was born. I've been learning in TUMO for 3 year. It's still fun to go there, because without it i wouldn't be making this website :-)</p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <h1 style="font-size:4vw; text-align: center; color: gray">WHY US?</h1>
      </v-col>
    </v-row>
    <v-row justify="center" class="text-center">
      <v-col cols="12" md="3">
        <v-img
          src="https://www.freepngimg.com/thumb/united_states/76079-google-computer-icons-states-maps-united-location.png"
          class="ml-12"
          max-width="150"
          max-height="150"
        ></v-img>

        <h3 class="about-whyMe__title" style="margin-left:10px">
          <br />Great knowledge of tour
          <br />products and 22 years
          <br />experience
        </h3>
        <p style="margin-left:10px">
          We have extensive experience in the
          <br />market of Armenian inbound tourism
          <br />and we know the Armenian tourism
          <br />product perfectly.
        </p>
      </v-col>

      <v-col cols="12" md="3">
        <v-img
          align="center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9OPNPRdp2rewb0E2aYOzS6n0DI99TTYvuhSR8sNAP5ZXyS40P&s"
          aspect-ratio="1"
          class="grey lighten-2"
          max-width="150"
          max-height="150"
        ></v-img>

        <h3 class="about-whyMe__title">
          Stable Connections With
          <br />Service Providers
        </h3>
        <p>
          Our company has stable relationships
          <br />with the best hotels, restaurants,
          <br />guides and transport companies of
          <br />Armenia, and we have worked out
          <br />algorithms for interacting with them
          <br />to solve various issues
        </p>
      </v-col>

      <v-col cols="12" md="3">
        <v-img
          align="center"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcvZ5izD8G0uoYBn939-hjAihnVyRv_6DsZCik_lHgdY6vw860&s"
          aspect-ratio="1"
          class="grey lighten-2"
          max-width="150"
          max-height="150"
        ></v-img>

        <h3 class="about-whyMe__title">Innovative Development</h3>
        <p>
          "Armenia Travel" is developing in tune
          <br />with market requirements and is
          <br />actively introducing new
          <br />technological processes. Working in
          <br />Armenia, we constantly monitor all
          <br />new opportunities for organizing
          <br />tours and ways to improve the quality
          <br />of service, as well as the distribution
          <br />channels of our products.
        </p>
      </v-col>

      <v-col cols="12" md="3">
        <v-img
          align="center"
          src="https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-black-creative-wallet-element-image_1174511.jpg"
          aspect-ratio="1"
          class="grey lighten-2"
          max-width="150"
          max-height="150"
        ></v-img>

        <h3 class="about-whyMe__title">Flexible Pricing Policy</h3>
        <p>
          We are building a flexible pricing
          <br />policy with our partners and mutually
          <br />beneficial forms of cooperation.
        </p>
      </v-col>
    </v-row>
  </div>
</template>



<script>
export default {
  name: "About",
  data: () => ({
    slides: [
      {
        title: "Winter holidays",
        src:
          "https://www.laajis.fi/wp-content/uploads/2018/08/2000x500-180815-kausikortti.jpg"
      },
      {
        title: "Time to extreme",
        src:
          "https://s14761.pcdn.co/wp-content/uploads/2019/09/Dolomites-Bike-Weeks-Olang-Bike-Road-Rennrad-EMTB-32-von-165-2000x500.jpg"
      },
      {
        title: "Dont be busy",
        src:
          "https://www.jotform.com/blog/wp-content/uploads/2019/12/jessica-lewis-fJXv46LT7Xk-unsplash-compressor-2000x500.jpg"
      },
      {
        title: "Time to be happy",
        src:
          "http://world-odyssey.com/wp-content/uploads/2016/07/zip-wire-e1531221279907-2000x500.jpg"
      }
    ]
  })
};
</script>

<style scoped>
.img_overlay {
  background: rgba(155, 155, 155, 0.4);
  color: white;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 2000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
body {
  font-family: Arial, Helvetica, sans-serif;
}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 2000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
body {
  font-family: Arial, Helvetica, sans-serif;
}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 2000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
</style>

