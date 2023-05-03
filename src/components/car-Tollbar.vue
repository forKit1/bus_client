<template>
    <div class="main" >

        <div class="car-Toolbal">
            <div class="user">
                <user-profile></user-profile>
            </div>

            <div :class="this.currentTable==='addresses-data-table'? 'toolbar-button-active' : 'toolbar-button'">
                <button class="toolbar-button-text-active" @click="changeTable('addresses-data-table')">
                    Таблиця адрес
                </button>
            </div>

            <div :class="this.currentTable==='carriers-statistics-data-table'? 'toolbar-button-active' : 'toolbar-button'">
                <button class="toolbar-button-text-active" @click="changeTable('carriers-statistics-data-table')">
                    Статистика перевізників
                </button>
            </div>

            <div :class="this.currentTable==='carriers-data-table'? 'toolbar-button-active' : 'toolbar-button'">
                <button class="toolbar-button-text-active" @click="changeTable('carriers-data-table')">
                    Таблиця перевізників
                </button>
            </div>

            <div :class="this.currentTable==='cities-data-table'? 'toolbar-button-active' : 'toolbar-button'">
                <button class="toolbar-button-text-active" @click="changeTable('cities-data-table')">
                    Таблиця міст
                </button>
            </div>

            <div :class="this.currentTable==='countries-data-table'? 'toolbar-button-active' : 'toolbar-button'">
                <button class="toolbar-button-text-active" @click="changeTable('countries-data-table')">
                    Таблиця країн
                </button>
            </div>

            <div :class="this.currentTable==='drivers-data-table'? 'toolbar-button-active' : 'toolbar-button'">
                <button class="toolbar-button-text-active" @click="changeTable('drivers-data-table')">
                    Таблиця водіїв
                </button>
            </div>

            <div :class="this.currentTable==='drivers-statistics-data-table'? 'toolbar-button-active' : 'toolbar-button'">
                <button class="toolbar-button-text-active" @click="changeTable('drivers-statistics-data-table')">
                    Статистика водіїв
                </button>
            </div>

            <div :class="this.currentTable==='regions-data-table'? 'toolbar-button-active' : 'toolbar-button'">
                <button class="toolbar-button-text-active" @click="changeTable('regions-data-table')">
                    Таблиця регіонів
                </button>
            </div>

            <div :class="this.currentTable==='routes-data-table'? 'toolbar-button-active' : 'toolbar-button'">
                <button class="toolbar-button-text-active" @click="changeTable('routes-data-table')">
                    Таблиця маршрутів
                </button>
            </div>


        </div>
        <div class="content">
            <h1 class="content-title">Таблиця Водіїв</h1>
            <input class="table-search-input" type="search" value="пошук..." name="search">
            <component :is='changeCurrentTable'></component>
        </div>
        
    </div>


</template>

<script>
import userProfile from './user/user-profile.vue'
import carriersStatisticsDataTable from './tableComponents/carriers-statistics-data-table.vue'
import carriersDataTable from './tableComponents/carries-data-table.vue'
import citiesDataTable from './tableComponents/cities-data-table.vue'
import countriesDataTable from './tableComponents/countries-data-table.vue'
import driversDataTable from './tableComponents/drivers-data-table.vue'
import driversStatisticsDataTable from './tableComponents/drivers-statistics-data-table.vue'
import regionsDataTable from './tableComponents/regions-data-table.vue'
import routesDataTable from './tableComponents/routes-data-table.vue'
import addressesDataTable from './tableComponents/addresses-data-table.vue'

  export default {
      name: "car-toolbar",
      components:{
        userProfile,
        carriersStatisticsDataTable,
        carriersDataTable,
        citiesDataTable,
        countriesDataTable,
        driversDataTable,
        driversStatisticsDataTable,
        regionsDataTable,
        routesDataTable,
        addressesDataTable,



      },
      data(){
        return{
            currentTable: ''
        }
      },
      methods:{
        changeTable(table){
        this.currentTable = table
        console.log('current table - ' + table)
        }
      },
      computed:{
        
        changeCurrentTable(){
            return this.currentTable
        }
      }


  }
</script>

<style>
.main{
    display: flex;

}

.content{
    padding-block-start: 40px;
    position: relative;
    overflow: hidden;
}
.add-button{
    margin-left: 25px;
    padding: 10px 33px;
    background: #AD86FE;
    border-radius: 10px;
    outline: #AD86FE;
    color: white;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
    border: none;
}
.edit-button{
    margin-left: 25px;
    padding: 10px 33px;
    background: red;
    border-radius: 10px;
    outline: red;
    color: white;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
    border: none;
}

.content-title{
    font-weight: 400;
    font-size: 24px;
    text-align: left;
    margin-bottom: 50px;
    margin-left: 30px;
}

.table-search-input{
    padding: 10px 16px;
    font-weight: 400;
    font-size: 14px;
    color: #AAAAAA;
    width: 206px;
    border: none;
    background: #FFFFFF;
    border-radius: 12px;
    outline: none;
}


.car-Toolbal{
    background-color: #F5F5F5;
    min-width: 250px;
    border-right: 1px solid rgba(0, 0, 0, 0.25);
    height: 100%;
}
  .user{
      margin-top: 20px;
      margin-bottom: 30px;
      display: flex;
      justify-content: center;
      align-items: center;

  }
  .user-info{
     margin-left: 20px;
      text-align: center;



  }
  .name{
      font-family:"Roboto", sans-serif;
      font-size: 16px;

  }
  .role{
      font-weight: 400;
      font-size: 12px;
      color: #818181;

  }
.toolbar-button-text {
padding: 13px 0;
font-size: 15px;
border: none;
background: none;
cursor: pointer;
}
.toolbar-button-active {
background-color: white;
width: 100%;
border: none;
cursor: pointer;
}
.toolbar-button-text-active {
padding: 13px 0;
font-weight: 700;
font-size: 15px;
border: none;
background: none;
cursor: pointer;

}

</style>