<template>
    <button @click="showAddForm" class="add-button">Додати</button>
    <data-table :endpoint="endpointValue" :columns="columns"></data-table>
      <div class="popup-container" v-if="addingNewData">
      <addresses-data-table-add-form @cancel='cancel'></addresses-data-table-add-form>
      </div>
  </template>
  
  <script>
  import addressesDataTableAddForm from './addForms/addresses-data-table-addForm.vue';
  import DataTable from './DataTable.vue';
  
  
  export default {
    name: 'App',
    components: {
        DataTable,
        addressesDataTableAddForm,
    },
    data(){
      return{
        addingNewData: false,
        endpointValue: "api/addresses",
        columns : ['id', 'name', 'fullName', 'latitude', 'longitude', 'cityId']
      }
    },
    methods:{
      cancel(){
        this.addingNewData = false;
      },
      showAddForm(){
        this.addingNewData = true;
      }
    }
  
  }
  
  </script>
  
  <style>
  .popup-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  </style>