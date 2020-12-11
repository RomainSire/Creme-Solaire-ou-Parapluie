<template>
  <main class="main">
    <div class="current">
      <img :src="getCurrentWeatherIcon" :alt="weather.altIcon" />
      <p>{{ weather.currentTemp }}°C</p>
    </div>
    <div class="time">
      <p class="time--hour">{{ currentTime }}</p>
      <p class="time--day">{{ currentDay }}</p>
    </div>
    <div class="detail">
      <div class="detail--wind">
        <img
          src="../assets/additionalIcons/wind.svg"
          alt="logo vitesse du vent"
        />
        <p>{{ weather.wind * 3.6 }} <small>km/h</small></p>
      </div>
      <div class="detail--pressure">
        <img
          src="../assets/additionalIcons/barometer.svg"
          alt="logo d'un baromètre"
        />
        <p>{{ weather.pressure }} <small>HPa</small></p>
      </div>
      <div class="detail--humidity">
        <img
          src="../assets/additionalIcons/humidity.svg"
          alt="logo pour l'humidité"
        />
        <p>{{ weather.humidity }} <small>%</small></p>
      </div>
    </div>
    <div class="forecast">
      <!-- <div class="forecast--wind">
        <img
          src="../assets/additionalIcons/wind.svg"
          alt="logo vitesse du vent"
        />
        <p>{{ weather.wind * 3.6 }} <small>km/h</small></p>
      </div> -->
    </div>
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
    },
    currentTime() {
      var moment = require('moment')
      moment.locale('fr')
      return moment().format('HH:mm')
    },
    currentDay() {
      var moment = require('moment')
      moment.locale('fr')
      return moment().format('dddd DD MMMM')
    }
  },
  created: function() {
    console.log(this.weather)
  }
}
</script>

<style lang="scss" scoped>
@mixin card-format {
  color: #333;
  font-weight: bold;
  border: 5px solid #3338;
  background: #eeed;
  box-shadow: 0 0 10px #3338;
}
.main {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
}
.current {
  width: 200px;
  height: 200px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  @include card-format;
  img {
    width: 80%;
    max-height: 100px;
  }
  p {
    font-size: 1.5rem;
    margin: 0.5em 0 0 0;
  }
}
.time {
  text-align: center;
  margin-top: 1.5em;
  padding: 0.5em;
  border-radius: 1em;
  border: 3px solid #fff;
  @include card-format;
  p {
    margin: 0;
    line-height: 1.3em;
  }
  &--hour {
    font-size: 2rem;
  }
}
.detail {
  img {
    width: 40px;
    max-height: 40px;
  }
  p {
    margin: 1em 0 0 0;
    font-size: 0.9rem;
  }
  & > div {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    @include card-format;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // Positionning around a circle..
    position: absolute;
    top: 50%;
    left: 50%;
  }
  &--wind {
    transform: translate((-216px - 50px), (-125px - 50px));
  }
  &--pressure {
    transform: translate((-250px - 50px), -50px);
  }
  &--humidity {
    transform: translate((-216px - 50px), (125px - 50px));
  }
}
</style>
