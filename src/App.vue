<template>
<v-container>
      <HelloWorld/>
      
      <card1/>
        <card1/>
         
    
</v-container>

</template>
<style scoped>
.container.pa-4.text-center {
    margin-top: 124px;
}
</style>

<script>
import HelloWorld from './components/HelloWorld';
import card1 from './components/card1';

export default {
  name: 'App',

  components: {
    HelloWorld,
    card1
  },


  data: () => ({
    
  }),
};
</script>
