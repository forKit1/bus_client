<template>
  <div class='table-wrapper'>
    <table class='table' >
      <thead>
        <tr>
          <th v-for="(column, columnIndex) in columns" :key="columnIndex">
            {{ column }}
          </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex">
          <td v-for="(column, columnIndex) in columns" :key="columnIndex">
            {{ row[column] }}
          </td>
          <td>
            <button @click="editRow(row)" class="edit-button">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="popup-container" v-if="editingRow">
    <edit-form
        :row-data="editingRow"
        @updateRow="updateRow"
        @cancel="cancelEdit"
      ></edit-form>
  </div>
</template>

<script>
import EditForm from "../tech/EditForm.vue";

export default {
  name: "DataTable",
  components: {
    EditForm,
  },
  props:['endpoint', 'columns'],
  inject: ['globalStore'],
  data() {
    return {
      data: [],
      editingRow: null,
      
    };
  },
  async created() {
    await this.getDataFromDatabase();
  },

  methods: {
    async getDataFromDatabase() {
      const accessToken = this.globalStore.accesBearertoken
      const response = await fetch(`http://api.autobus.cuqmbr.xyz/${this.endpoint}`, {
                                  headers: {
                                    'Authorization': `Bearer ${accessToken}`,
                                  },
                                })
      const result = await response.json();
  
  this.data = Array.isArray(result) ? result : [result];
    },
    editRow(row) {
      this.editingRow = { ...row };
    },
    updateRow(updatedRow) {
      const index = this.data.findIndex((item) => item.id === updatedRow.id);
      if (index !== -1) {
        this.data.splice(index, 1, updatedRow);
      }
      this.editingRow = null;
    },
    cancelEdit() {
      this.editingRow = null;
    },
    showAddForm() {
      this.addingNewPerson = true;
    },
    submitNewPerson(newPerson) {
      this.data.push(newPerson);
      this.addingNewPerson = false;
    },
    cancelAdd() {
      this.addingNewPerson = false;
    },
  },
};
</script>

<style scoped>
.table-wrapper {
  width: 100%;
  overflow-x: auto;
}

/* Стили для таблицы */
.table {
  width: 100%;
  border-collapse: collapse;

}

/* Стили для ячеек заголовка таблицы */
.table th {
  background-color: #f2f2f2;
  text-align: left;
  padding: 8px;
  border: 1px solid #ddd;
}

/* Стили для ячеек таблицы */
.table td {
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Стили для строк таблицы при наведении */
.table tr:hover {
  background-color: #f5f5f5;
}


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
