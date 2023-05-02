<template>
  <data-table :endpoint="endpointValue"></data-table>
  
</template>

<script>
import DataTable from './DataTable.vue';

export default {
  name: 'App',
  components: {
      DataTable,
  },
  data(){
    return{
      endpointValue: "api/addresses"
    }
  }

}

</script>

<style>

</style>