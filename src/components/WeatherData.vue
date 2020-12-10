<template>
  <main class="main">
    <div class="current">
      <img :src="getCurrentWeatherIcon" :alt="weather.altIcon" />
    </div>
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
  computed: {
    getCurrentWeatherIcon() {
      return this.weather.icon
        ? require('../assets/weatherIcons/' + this.weather.icon + '.svg')
        : ''
    }
  },
  created: function() {
    console.log(this.weather)
  }
}
</script>

<style></style>
