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
      endpointValue: "api/cities",
      columns : ['id', 'name', 'fullName', 'stateId', 'addresses']
    }
  }

}

</script>

<style>

</style>s