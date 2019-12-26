<template>
  <v-container>
    <HelloWorld />

    <card2 />
  </v-container>
</template>
<style scoped>
.container.pa-4.text-center {
  margin-top: 124px;
}
</style>
<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  width: 100%;
}
</style>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import card2 from "./components/card2.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    card2
  },

  data: () => ({})
};
</script>
