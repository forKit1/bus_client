<template>
  <data-table :endpoint="endpointValue" :columns="columns"></data-table>
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
      endpointValue: "api/states",
      columns : ['id', 'name', 'fullName', 'cities', 'countryId', 'country']
    }
  }

}

</script>

<style>

</style>