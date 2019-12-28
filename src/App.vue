<template>
  <v-app>
    <v-app-bar
      app
      color="#dc6337"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
      </template>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="show = !show"></v-app-bar-nav-icon>

      <v-toolbar-title class="hidden-sm-and-down">
        <img src="//overlandarmenia.com/images/logo.svg" alt="logo" />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <img width="20" class="ma-2 pt-1" src="//overlandarmenia.com/images/call.svg" alt />

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

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon color="yellow" v-on="on">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.route">
            <v-list-item-title >{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension class="hidden-sm-and-down">
        <v-tabs
          align-with-title
          background-color="transparent"
          style="display:flex ;justify-content: space-around"
          class="hidden-sm-and-down"
        >
          <v-tab to="/" style="background-color:#dc6337">Home</v-tab>
          <v-tab to="/about" style="background-color:#f37b1f">About</v-tab>
          <v-tab style="background-color:#fec208;">Contact</v-tab>
          <v-tab style="background-color:#ef5a23;">Display</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="show" app class="hidden-md-and-up" disable-resize-watcher disable-route-watcher>
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

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in pages"
          :key="item.title"
          :to=item.route
        >
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
      <router-view>
      </router-view>
    </v-content>
    <Footer/>
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
import Footer from './components/Footer'
export default {
  name: "App",
  components: {
    Footer
  },

  data: () => ({
    show: false,
    items: [
      {title: 'Login', route: '/sign', props: {tab: '0'}},
      {title: 'Register', route: '/sign', props: {tab: '1'}}
    ],
    pages: [
      {title: 'Home', route: '/', icon: 'mdi-home'},
      {title: 'About', route: '/about', icon: 'mdi-information-outline'},
      {title: 'Contact', route: '/contact', icon: 'mdi-send'},
      {title: 'About Armenia', route: '/armenia', icon: 'mdi-map-marker'},
    ]
  })
};
</script>
