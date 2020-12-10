<template>
  <div class="home">
    <ReactiveBackground
      imageUrl="https://media.routard.com/image/01/4/fb-perpignan.1543014.jpg"
    />
    <CityName />
    <WeatherData />
  </div>
</template>

<script>
// @ is an alias to /src
import ReactiveBackground from '@/components/ReactiveBackground.vue'
import CityName from '../components/CityName.vue'
import WeatherData from '../components/WeatherData'

export default {
  name: 'Home',
  components: {
    ReactiveBackground,
    CityName,
    WeatherData
  },
  data: function() {
    return {
      location: 'Perpignan'
    }
  },
  methods: {
    getWeatherInfos() {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=perpignan&appid=${process.env.VUE_APP_OPEN_WEATHER_KEY}&units=metric&lang=fr`
      )
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
    }
  },
  created: function() {
    // `this` est une référence à l'instance de vm
    this.getWeatherInfos()
  }
}
</script>
