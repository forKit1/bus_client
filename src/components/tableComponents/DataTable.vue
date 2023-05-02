<template>
  <button @click="showAddForm" class="add-button">Додати</button>
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
  <div class="popup-container" v-if="addingNewPerson">
    <add-form
      @submitNewPerson="submitNewPerson"
      @cancel="cancelAdd"
    ></add-form>
  </div>
</template>

<script>
import EditForm from "../tech/EditForm.vue";
import AddForm from "../tech/AddForm.vue";

export default {
  name: "DataTable",
  components: {
    EditForm,
    AddForm,
  },
  props:['endpoint', 'columns'],
  data() {
    return {
      data: [],
      editingRow: null,
      addingNewPerson: false,
      endpointValue:`http://api.autobus.cuqmbr.xyz/${this.endpoint}`
    };
  },
  async created() {
    await this.getDataFromDatabase();
  },

  methods: {
    async getDataFromDatabase() {
  const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiNGM5YWZkYy1kYzEzLTQ3MDktODIxYi0zYmZjMjkzMmRkYWIiLCJuYW1lIjoidXNlciB1c2VyIHVzZXIiLCJnaXZlbl9uYW1lIjoidXNlciIsImZhbWlseV9uYW1lIjoidXNlciIsIm1pZGRsZV9uYW1lIjoidXNlciIsImdlbmRlciI6IlVuZGVmaW5lZCIsImJpcnRoZGF0ZSI6IlVuZGVmaW5lZCIsImVtYWlsIjoiYWRtaW5AYXV0b2J1cy5jb20iLCJlbWFpbF92ZXJpZmllZCI6IlRydWUiLCJleHAiOjE2ODMwNzQ4ODksInJvbGVzIjoiQWRtaW5pc3RyYXRvciIsImlzcyI6ImFwaS5hdXRvYnVzLmN1cW1ici54eXoiLCJhdWQiOiJhcGkuYXV0b2J1cy5jdXFtYnIueHl6In0.Tha8E0Qd5DXxfLhNjrjBamply3hwpT-VOLGKwOq8euw';
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
