<template>
  <v-app>
    <v-app-bar
      app
      fixed
      color="#dc6337"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
      </template>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="show = !show"></v-app-bar-nav-icon>

      <v-toolbar-title class="hidden-sm-and-down pa-0">
        <v-img src="./assets/overland.svg" alt="logo" />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-slide-x-reverse-transition>
        <v-text-field
        v-show="searchShow"
          clearable
          filled
          hide-details
          dark
          label="Search"
          v-model="search">
        </v-text-field>
      </v-slide-x-reverse-transition>
      <v-btn icon @click="searchShow = !searchShow">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      
      <v-btn icon>
        <img
          @click.stop="dialog = true"
          width="20"
          class="ma-2 pt-1"
          src="//overlandarmenia.com/images/call.svg"
          alt
        />
      </v-btn>
      <v-dialog v-model="dialog" max-width="400">
        <v-hover v-slot:default="{ hover }">
          <v-card class="mb-2">
            <v-card-title
              class="headline"
              style="justify-content: center;  color:#43a047;"
            >Contact Us</v-card-title>
            <v-card-text>
              <a
                href="tel:+37491100139"
                style="color:black;
    text-decoration: none;
    background-color: transparent"
              >+37491100139</a>
              <br />

              <a
                href="tel:+37477963369"
                style="color:black;
    text-decoration: none;
    background-color: transparent"
              >+37477963369</a>
              <br />
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-dialog>
      <a
        class="ma-2 hidden-sm-and-down title"
        style="color:white;
    text-decoration: none;
    background-color: transparent"
        href="tel:+37491100139"
      >+37491100139</a>

      <a
        class="ma-2 hidden-sm-and-down title"
        style="color:white;
    text-decoration: none;
    background-color: transparent;"
        href="tel:+37477963369"
      >+37477963369</a>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon color="yellow" v-on="on">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.route">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension class="hidden-sm-and-down">
        <v-row justify="center">
          <v-col cols="8">
            <v-tabs
              align-with-title
              background-color="transparent"
              class="hidden-sm-and-down"
              fixed-tabs
            >
              <v-tab to="/" style="background-color:#dc6337">Home</v-tab>
              <v-tab to="/about" style="background-color:#f37b1f">About</v-tab>
              <v-tab to="/contact" style="background-color:#fec208;">Contact</v-tab>
              <v-tab to='/submit' style="background-color:#f57842;">Submit</v-tab>
              <v-tab to='/armenia' style="background-color:#ef5a23;">Armenia</v-tab>
            </v-tabs>
          </v-col>
          </v-row>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="show"
      app
      class="hidden-md-and-up"
      disable-resize-watcher
      disable-route-watcher
    >
      <v-list-item>
        <v-list-item-content>
          <v-row justify="start">
            <v-col cols="9">
              <v-img class="ml-4" src="//overlandarmenia.com/images/logo.svg" alt="logo" />
            </v-col>
          </v-row>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in pages" :key="item.title" :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<style scoped>
.container.pa-4.text-center {
  margin-top: 20px;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  width: 100%;
}
</style>

<script>
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Footer
  },

  data: () => ({
    dialog: false,
    show: false,
    searchShow: false,
    search: null,
    items: [
      { title: "Login", route: "/sign", props: { tab: "0" } },
      { title: "Register", route: "/sign", props: { tab: "1" } }
    ],
    pages: [
      { title: "Home", route: "/", icon: "mdi-home" },
      { title: "About", route: "/about", icon: "mdi-information-outline" },
      { title: "Contact", route: "/contact", icon: "mdi-send" },
      { title: "About Armenia", route: "/armenia", icon: "mdi-map-marker" },
      { title: "Submit", route: "/submit", icon: " mdi-account-key" }
    ]
  })
};
</script>
