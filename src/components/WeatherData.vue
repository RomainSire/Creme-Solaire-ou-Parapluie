<template>
  <main class="main">
    <div class="current">
      <img :src="getCurrentWeatherIcon" :alt="weather.altIcon" />
      <p>{{ weather.currentTemp }}°C</p>
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

<style lang="scss" scoped>
.current {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 3px solid #fff;
  background: #333d;
  box-shadow: 0 0 10px #3338;
  img {
    width: 80%;
    max-height: 100px;
  }
  p {
    font-size: 1.5rem;
    margin: 0.5em 0 0 0;
    color: #fff;
  }
}
</style>
