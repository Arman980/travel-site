<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8" >
        <h2>About Armenia</h2>

        <div class="armenia">
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563322.3710997235!2d43.91694542877945!3d40.06729189499692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40155684e773bac7%3A0xd0b4757aeb822d23!2sArmenia!5e0!3m2!1sen!2s!4v1577537268556!5m2!1sen!2s"
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen
          ></iframe>
          <p class="description">
            Armenia, officially the Republic of Armenia, is a landlocked country in the South Caucasus region of Eurasia. Located in Western Asia on the Armenian Highlands, it is bordered by Turkey to the west, Georgia to the north, the de facto independent Republic of Artsakh and Azerbaijan to the east, and Iran and Azerbaijan's exclave of Nakhchivan to the south.
            Armenia is a unitary, multi-party, democratic nation-state with an ancient cultural heritage. Urartu was established in 860 BC and by the 6th century BC it was replaced by the Satrapy of Armenia.
            <img
              class="globus"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Armenia_%28orthographic_projection%29.svg/2560px-Armenia_%28orthographic_projection%29.svg.png"
            />
            The Kingdom of Armenia reached its height under Tigranes the Great in the 1st century BC and became the first state in the world to adopt Christianity as its official religion in the late 3rd or early 4th century AD. The official date of state adoption of Christianity is 301. The ancient Armenian kingdom was split between the Byzantine and Sasanian Empires around the early 5th century. Under the Bagratuni dynasty, the Bagratid Kingdom of Armenia was restored in the 9th century. Declining due to the wars against the Byzantines, the kingdom fell in 1045 and Armenia was soon after invaded by the Seljuk Turks. An Armenian principality and later a kingdom Cilician Armenia was located on the coast of the Mediterranean Sea between the 11th and 14th centuries.
            Between the 16th and 19th centuries, the traditional Armenian homeland composed of Eastern Armenia and Western Armenia came under the rule of the Ottoman and Iranian empires, repeatedly ruled by either of the two over the centuries. By the 19th century, Eastern Armenia had been conquered by the Russian Empire, while most of the western parts of the traditional Armenian homeland remained under Ottoman rule. During World War I, Armenians living in their ancestral lands in the Ottoman Empire were systematically exterminated in the Armenian Genocide. In 1918, following the Russian Revolution, all non-Russian countries declared their independence after the Russian Empire ceased to exist, leading to the establishment of the First Republic of Armenia. By 1920, the state was incorporated into the Transcaucasian Socialist Federative Soviet Republic, and in 1922 became a founding member of the Soviet Union. In 1936, the Transcaucasian state was dissolved, transforming its constituent states, including the Armenian Soviet Socialist Republic, into full Union republics. The modern Republic of Armenia became independent in 1991 during the dissolution of the Soviet Union.
            Armenia recognises the Armenian Apostolic Church, the world's oldest national church, as the country's primary religious establishment.
            The unique Armenian alphabet was invented by Mesrop Mashtots in 405 AD.
            Armenia is a member of the Eurasian Economic Union, the Council of Europe and the Collective Security Treaty Organization. Armenia supports the de facto independent Artsakh, which was proclaimed in 1991.
          </p>
          <p class="text">
            <b>Official name:</b> Republic of Armenia (Armenian - Hayastan)
          </p>
          <br />
          <p class="text">
            <b>Government:</b> Parliamentary Republic
          </p>
          <br />
          <p class="text">
            <b>Head of the State:</b> Prime Minister
          </p>
          <br />
          <p class="text">
            <b>Territory:</b> 29.743 sq km
          </p>
          <br />
          <p class="text">
            <b>Borders</b> Georgia - 219 km; Azerbaijan - 566 km; Nagorno Karabakh - 221 km; Iran - 44 km; Turkey - 311 km
          </p>
          <br />
          <p class="text">
            <b>Population:</b> Over 3 million
          </p>
          <br />
          <p class="text">
            <b>Capital:</b> Yerevan
          </p>
          <br />
          <p class="text">
            <b>Religion:</b> The majority of believers (92.6 %) are of Armenian Apostolic Church.
          </p>
          <br />
          <p class="text">
            <b>State Language:</b> Armenian
          </p>
          <br />
          <p class="text">
            <b>Administrative Division:</b> 10 regions (marzes) - Aragatsotn, Ararat, Armavir,
            Gegharkunik,Kotayk, Lori, Shirak, Syunik, Vayots Dzor, Tavush. The capital city,Yerevan, is a separate administrative unit
          </p>
          <br />
          <p class="text">
            <b>Major Cities:</b> Yerevan, Gyumri, Vanadzor, Kapan, Armavir, Gavar, Echmiadzin, Ijevan, Hrazdan
          </p>
          <br />
          <p class="text">
            <b>National Currency:</b> Dram
          </p>
          <br />
        </div>

          <p class="header">National Symbols</p>

        <div class="main">
          <div class="flag">
            <p class="about">Flag</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/2880px-Flag_of_Armenia.svg.png"
            />
          </div>
          <div class="Coat-of-arms">
            <p class="about">Coat-of-arms</p>

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Coat_of_arms_of_Armenia.svg/2560px-Coat_of_arms_of_Armenia.svg.png"
            />
          </div>
          <div class="Anthem">
            <p class="about">Anthem</p>
            <iframe
              width="550"
              height="350"
              src="https://www.youtube.com/embed/nxhMfBYvFmA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
iframe {
  float: left;
  padding: 20px;
}
.description {
  font-size: 20px;
  padding: 10px;
}
h2 {
  font-size: 18px;
  margin-left: 50px;
}
.text {
  font-size: 18px;
  margin-left: 50px;
}
.main {
  display: flex;
  justify-content: space-between;
  margin-top: 50px
}
.main img {
  width: 480px;
  height: 350px;
}
.globus {
  float: right;
  width: 300px;
  height: 300px;
}
h2 {
  text-align: center;
  font-size: 35px;
}
.about {
  font-size: 50px;
  text-align: center;
}
.header {
  font-size: 50px;
  margin-left: 650px
}
</style>
<script>
export default {
  name: "armenia",
  components: {}
};
</script>
