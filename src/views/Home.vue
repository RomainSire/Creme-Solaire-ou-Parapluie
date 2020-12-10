<template>
  <div class="home">
    <ReactiveBackground
      imageUrl="https://media.routard.com/image/01/4/fb-perpignan.1543014.jpg"
    />
    <CityName />
    <WeatherData v-bind:weather="weather" />
  </div>
</template>

<script>
// @ is an alias to /src
import ReactiveBackground from '@/components/ReactiveBackground.vue'
import CityName from '@/components/CityName.vue'
import WeatherData from '@/components/WeatherData'

export default {
  name: 'Home',
  components: {
    ReactiveBackground,
    CityName,
    WeatherData
  },
  data: function() {
    return {
      location: 'Perpignan',
      weather: {}
    }
  },
  methods: {
    getWeatherInfos() {
      const axios = require('axios').default
      axios
        .all([
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=perpignan&appid=${process.env.VUE_APP_OPEN_WEATHER_KEY}&units=metric&lang=fr`
          ),
          axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=perpignan&appid=${process.env.VUE_APP_OPEN_WEATHER_KEY}&units=metric&lang=fr`
          )
        ])
        .then(
          axios.spread((currentData, forecastData) => {
            this.weather.currentTemp = currentData.data.main.temp
            this.weather.icon = currentData.data.weather[0].icon
            this.weather.wind = currentData.data.wind.speed
            this.weather.pressure = currentData.data.main.pressure
            this.weather.humidity = currentData.data.main.humidity
            this.weather.threeHours = {
              time: forecastData.data.list[1].dt_txt,
              icon: forecastData.data.list[1].weather[0].icon,
              temp: forecastData.data.list[1].main.temp
            }
            this.weather.sixHours = {
              time: forecastData.data.list[2].dt_txt,
              icon: forecastData.data.list[2].weather[0].icon,
              temp: forecastData.data.list[2].main.temp
            }
            this.weather.twentyfourHours = {
              time: forecastData.data.list[8].dt_txt,
              icon: forecastData.data.list[8].weather[0].icon,
              temp: forecastData.data.list[8].main.temp
            }
          })
        )
    }
  },
  mounted: function() {
    this.getWeatherInfos()
  }
}
</script>
