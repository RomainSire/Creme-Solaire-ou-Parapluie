<template>
  <main class="main">
    <!-- CURRENT WEATHER -->
    <div class="current">
      <img :src="getCurrentWeatherIcon" :alt="weather.altIcon" />
      <p>{{ Math.round(weather.currentTemp * 10) / 10 }}°C</p>
    </div>
    <!-- CURRENT TIME -->
    <div class="time">
      <p class="time--hour">{{ currentTime }}</p>
      <p class="time--day">{{ currentDay }}</p>
    </div>
    <!-- DETAIL OF CURRENT WEATHER -->
    <div class="detail">
      <div class="detail--wind">
        <img
          src="../assets/additionalIcons/wind.svg"
          alt="logo vitesse du vent"
        />
        <p>{{ Math.round(weather.wind * 3.6) }} <small>km/h</small></p>
      </div>
      <div class="detail--pressure">
        <img
          src="../assets/additionalIcons/barometer.svg"
          alt="logo d'un baromètre"
        />
        <p>{{ Math.round(weather.pressure) }} <small>HPa</small></p>
      </div>
      <div class="detail--humidity">
        <img
          src="../assets/additionalIcons/humidity.svg"
          alt="logo pour l'humidité"
        />
        <p>{{ Math.round(weather.humidity) }} <small>%</small></p>
      </div>
    </div>
    <!-- WEATHER FORECAST -->
    <div class="forecast">
      <div class="forecast--3h">
        <img :src="get3hIcon" alt="" />
        <p class="forecast--temp">
          {{ weather.threeHours ? Math.round(weather.threeHours.temp) : '' }}°C
        </p>
        <p class="forecast--time">Dans 3h</p>
      </div>
      <div class="forecast--6h">
        <img :src="get6hIcon" alt="" />
        <p class="forecast--temp">
          {{ weather.sixHours ? Math.round(weather.sixHours.temp) : '' }}°C
        </p>
        <p class="forecast--time">Dans 6h</p>
      </div>
      <div class="forecast--24h">
        <img :src="get24hIcon" alt="" />
        <p class="forecast--temp">
          {{
            weather.twentyfourHours
              ? Math.round(weather.twentyfourHours.temp)
              : ''
          }}°C
        </p>
        <p class="forecast--time">Demain</p>
      </div>
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
        ? require(`../assets/weatherIcons/${this.weather.icon}.svg`)
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
    },
    get3hIcon() {
      return this.weather.threeHours
        ? require(`../assets/weatherIcons/${this.weather.threeHours.icon}.svg`)
        : ''
    },
    get6hIcon() {
      return this.weather.sixHours
        ? require(`../assets/weatherIcons/${this.weather.sixHours.icon}.svg`)
        : ''
    },
    get24hIcon() {
      return this.weather.twentyfourHours
        ? require(`../assets/weatherIcons/${this.weather.twentyfourHours.icon}.svg`)
        : ''
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
    // Positionning around a circle.
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
.forecast {
  img {
    width: 40px;
    max-height: 40px;
  }
  p {
    margin: 0;
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
    // Positionning around a circle.
    position: absolute;
    top: 50%;
    left: 50%;
  }
  &--3h {
    transform: translate((216px - 50px), (-125px - 50px));
  }
  &--6h {
    transform: translate((250px - 50px), -50px);
  }
  &--24h {
    transform: translate((216px - 50px), (125px - 50px));
  }
}
</style>
