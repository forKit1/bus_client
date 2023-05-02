<!-- EditForm.vue -->
<template>
  <div class="form-popup">
    <h3>Edit Row</h3>
    <div v-for="(value, key, index) in rowData" :key="index">
      <label :for="key">{{ key }}</label>
      <input :id="key" type="text" v-model="editedRow[key]" />
    </div>
    <button @click="saveChanges">Save</button>
    <button @click="$emit('cancel')">Cancel</button>
  </div>
</template>

<script>
export default {
  name: "EditForm",
  props: {
    rowData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editedRow: { ...this.rowData },
    };
  },
  methods: {
    saveChanges() {
      this.$emit("updateRow", this.editedRow);
    },
  },
};
</script>

<style scoped>
.form-popup {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}
form {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px;
  align-items: center;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

button[type="button"] {
  background-color: #f44336;
}
</style>




