<template>
  <div class="form-popup">
    
    <h3>Add New Person</h3>
    <form @submit.prevent="submit">
      <div v-for="(column, columnIndex) in columns" :key="columnIndex">
        <label :for="column">{{ column }}</label>
        <input :id="column" v-model="newPerson[column]" required />
      </div>
      <button type="submit">Add</button>
      <button type="button" @click="$emit('cancel')">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddForm",
  data() {
    return {
      columns: ["id", "name", "username", "email", "phone", "website"], // Add the relevant columns
      newPerson: {
        id: "",
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
      },
    };
  },
  methods: {
    submit() {
      this.$emit("submitNewPerson", { ...this.newPerson });
      this.resetForm();
    },
    resetForm() {
      this.newPerson = {
        id: "",
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
      };
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