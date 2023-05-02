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
      endpointValue: "api/drivers",
      columns : ['id', 'firstName', 'lastName', 'patronymic', 'email', 'emailConfirmed', 'phoneNumber', 'phoneNumberConfirmed', 'birthDate', 'gender', 'document', 'documentDetails', 'companyId']
    }
  }

}

</script>

<style>

</style>