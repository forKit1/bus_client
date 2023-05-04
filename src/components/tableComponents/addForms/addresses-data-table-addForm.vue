<template>
  <div class="form-popup">
    <h2>Add Object to Database</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="data.name" />
      </div>
      <div>
        <label for="latitude">Latitude:</label>
        <input type="number" id="latitude" step="0.000001" v-model="data.latitude" />
      </div>
      <div>
        <label for="longitude">Longitude:</label>
        <input type="number" id="longitude" step="0.000001" v-model="data.longitude" />
      </div>
      <div>
        <label for="cityId">City:</label>
        <select id="cityId" v-model="data.cityId">
          <option v-for="city in cities" :value="city.id" :key="city.id">
            {{ city.name }}
          </option>
        </select>
      </div>
      <div class="actions">
        <button type="button" @click="$emit('cancel')">Cancel</button>
        <button type="submit">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  inject:['globalStore'],
  data() {
    return {
      accessToken : this.globalStore.accesBearertoken,
      data: {
        name: "",
        latitude: null,
        longitude: null,
        cityId: null,
      },
      cities: [], // Replace with your fetched cities data
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch(`http://api.autobus.cuqmbr.xyz/api/cities`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.accessToken}`,
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify(this.data),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Success:', result);
      } catch (error) {
        console.error('Error:', error);
      }
    


    },
    async fetchCities() {
      const response = await fetch(`http://api.autobus.cuqmbr.xyz/api/cities`, {
                                  headers: {
                                      'Authorization': `Bearer ${this.accessToken}`,
                                  },
                                  })
      const result = await response.json();
      this.cities = Array.isArray(result) ? result : [result];
    },
  },
  created() {
    this.fetchCities();
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
