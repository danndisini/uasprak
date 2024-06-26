<template>
  <div class="weather-app">
    <div class="weather">
      <h1>Suhuu</h1>
      <input type="text" v-model="city" placeholder="Cari Kota" />
      <button @click="fetchWeather">Cari</button>
      <div v-if="weather" class="weather-result">
        <h2>{{ weather.name }}</h2>
        <p>{{ weather.weather[0].description }}</p>
        <p>{{ (weather.main.temp - 273.15).toFixed(2) }}°C</p>
      </div>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: '',
      weather: null,
      error: null,
    };
  },
  methods: {
    async fetchWeather() {
      const apiKey = 'b3cec4f34c2ce3c6b9a8ab63d397fdf7';
      this.error = null;
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}`
        );
        if (!response.ok) {
          throw new Error('City not found');
        }
        const data = await response.json();
        this.weather = data;
      } catch (error) {
        this.error = error.message;
      }
    },
  },
};
</script>

<style scoped>
.weather-app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f8ff;
}

.weather {
  text-align: center;
  background: #fff;
  padding: 40px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

input {
  padding: 10px;
  font-size: 16px;
  width: calc(100% - 32px);
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.weather-result {
  border: 1px solid #ccc;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  background: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.error {
  color: red;
  margin-top: 20px;
}
</style>
