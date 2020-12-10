<template>
  <main class="main">
    <div class="current"></div>
    <div class="time"></div>
    <div class="detail"></div>
    <div class="forecast"></div>
  </main>
</template>

<script>
export default {
  name: 'WeatherData',
  props: {
    weather: {}
  },
  created: function() {
    console.log(this.weather)
  }
}
</script>

<style></style>
