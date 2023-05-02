<template>
  <div id="app">
      <add-driver></add-driver>
      <car-header></car-header>
      <car-tollbar></car-tollbar>
  </div>
</template>

<script>


import carHeader from "@/components/car-Header.vue";
import carTollbar from "@/components/car-Tollbar.vue";
import AddDriver from "@/components/add-driver.vue";
export default {
  name: 'App',
  components: {
      AddDriver,
      carHeader,
      carTollbar
  },

}
</script>

<style>

#app {
    z-index: 1;
    left: 0;
    top: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
    padding: 0;
    margin: 0;
  color: #2c3e50;
  background-color:#F5F5F5;
;
}
p{
    margin: 0;
}
</style>
