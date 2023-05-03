<template>
  <button @click="showAddForm" class="add-button">Додати</button>
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
      addingNewData: false,
      endpointValue: "api/companies",
      columns : ['id', 'ownerId', 'name', 'vehicles']
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