<template>
  <v-card class="overflow-hidden" style="height:100px;">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      

      <v-toolbar-title>
        <img src="//overlandarmenia.com/images/logo.svg" alt="logo">
      </v-toolbar-title>
   


      <v-spacer></v-spacer>

 <img width="20"  style="margin-right:10px;" src="//overlandarmenia.com/images/call.svg" alt="">

<a class="ml-2 pr-2" style="color:white;
    text-decoration: none;
    background-color: transparent;margin-right:30px;"  href="tel:+37491100139">+37491100139</a>

<a class="ml-2 pr-2" style="color:white;
    text-decoration: none;
    background-color: transparent;"   href="tel:+37477963369">+37477963369</a>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

     
      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            color="yellow"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      
      </v-menu>

      <template v-slot:extension>
        <v-tabs
          align-with-title
          background-color="transparent"
        >
          <v-tab>Home</v-tab>
          <v-tab>About</v-tab>
          <v-tab>Contact</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
  }
</script>