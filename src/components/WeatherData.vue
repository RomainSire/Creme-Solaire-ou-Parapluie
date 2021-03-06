<template>
  <main class="main">
    <!-- CURRENT WEATHER -->
    <div class="current">
      <img
        :src="getCurrentWeatherIcon"
        :alt="
          currentWeather.weather ? currentWeather.weather[0].description : ''
        "
      />
      <p>
        {{
          currentWeather.main
            ? Math.round(currentWeather.main.temp * 10) / 10
            : ''
        }}°C
      </p>
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
        <p>
          {{
            currentWeather.wind
              ? Math.round(currentWeather.wind.speed * 3.6)
              : ''
          }}
          <small>km/h</small>
        </p>
      </div>
      <div class="detail--pressure">
        <img
          src="../assets/additionalIcons/barometer.svg"
          alt="logo d'un baromètre"
        />
        <p>
          {{
            currentWeather.main ? Math.round(currentWeather.main.pressure) : ''
          }}
          <small>HPa</small>
        </p>
      </div>
      <div class="detail--humidity">
        <img
          src="../assets/additionalIcons/humidity.svg"
          alt="logo pour l'humidité"
        />
        <p>
          {{
            currentWeather.main ? Math.round(currentWeather.main.humidity) : ''
          }}
          <small>%</small>
        </p>
      </div>
    </div>
    <!-- WEATHER FORECAST -->
    <div class="forecast">
      <div class="forecast--3h">
        <p class="forecast--time">+3h</p>
        <img :src="get3hIcon" alt="" />
        <p class="forecast--temp">
          {{
            forecastWeather.list
              ? Math.round(forecastWeather.list[1].main.temp)
              : ''
          }}°C
        </p>
      </div>
      <div class="forecast--6h">
        <p class="forecast--time">+6h</p>
        <img :src="get6hIcon" alt="" />
        <p class="forecast--temp">
          {{
            forecastWeather.list
              ? Math.round(forecastWeather.list[2].main.temp)
              : ''
          }}°C
        </p>
      </div>
      <div class="forecast--24h">
        <p class="forecast--time">+24h</p>
        <img :src="get24hIcon" alt="" />
        <p class="forecast--temp">
          {{
            forecastWeather.list
              ? Math.round(forecastWeather.list[8].main.temp)
              : ''
          }}°C
        </p>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'WeatherData',
  data: function() {
    return {
      currentWeather: {},
      forecastWeather: {}
    }
  },
  computed: {
    ...mapState(['location']),
    getCurrentWeatherIcon() {
      return this.currentWeather.weather
        ? require(`../assets/weatherIcons/${this.currentWeather.weather[0].icon}.svg`)
        : ''
    },
    currentTime() {
      if (this.currentWeather.dt && this.currentWeather.dt !== 'error') {
        var moment = require('moment')
        moment.locale('fr')
        return moment
          .unix(this.currentWeather.dt + this.currentWeather.timezone - 3600)
          .format('HH:mm')
      } else if (this.currentWeather.dt && this.currentWeather.dt === 'error') {
        return 'Erreur !'
      } else {
        return 'chargement...'
      }
    },
    currentDay() {
      if (this.currentWeather.dt && this.currentWeather.dt !== 'error') {
        var moment = require('moment')
        moment.locale('fr')
        return moment
          .unix(this.currentWeather.dt + this.currentWeather.timezone - 3600)
          .format('dddd DD MMMM')
      } else {
        return ''
      }
    },
    get3hIcon() {
      return this.forecastWeather.list
        ? require(`../assets/weatherIcons/${this.forecastWeather.list[1].weather[0].icon}.svg`)
        : ''
    },
    get6hIcon() {
      return this.forecastWeather.list
        ? require(`../assets/weatherIcons/${this.forecastWeather.list[2].weather[0].icon}.svg`)
        : ''
    },
    get24hIcon() {
      return this.forecastWeather.list
        ? require(`../assets/weatherIcons/${this.forecastWeather.list[8].weather[0].icon}.svg`)
        : ''
    }
  },
  methods: {
    getWeatherInfos() {
      const axios = require('axios').default
      axios
        .get(
          `${process.env.VUE_APP_MY_CORS_PROXY}https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${this.location}&key=${process.env.VUE_APP_GPLACE_KEY}&inputtype=textquery&language=fr&fields=geometry`
        )
        .then(data => {
          const lat = data.data.candidates[0].geometry.location.lat
          const long = data.data.candidates[0].geometry.location.lng
          axios
            .all([
              axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.VUE_APP_OPEN_WEATHER_KEY}&units=metric&lang=fr`
              ),
              axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.VUE_APP_OPEN_WEATHER_KEY}&units=metric&lang=fr`
              )
            ])
            .then(
              axios.spread((currentData, forecastData) => {
                this.currentWeather = currentData.data
                this.forecastWeather = forecastData.data
                console.log(this.currentWeather)
                console.log(this.forecastWeather)
              })
            )
            .catch(error => {
              this.currentWeather = []
              this.currentWeather.weather = []
              this.currentWeather.weather.push({
                icon: 'error',
                description: 'Erreur'
              })
              this.currentWeather.dt = 'error'
              console.log(error)
            })
        })
        .catch(error => {
          this.currentWeather = []
          this.currentWeather.weather = []
          this.currentWeather.weather.push({
            icon: 'error',
            description: 'Erreur'
          })
          this.currentWeather.dt = 'error'
          console.log(error)
        })
    }
  },
  created: function() {
    // Initialisation des variables par défaut
    this.currentWeather.weather = []
    this.currentWeather.weather.push({
      icon: 'refresh',
      description: 'rechargement de la page'
    })
    // Appel APIs
    this.getWeatherInfos()
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
  bottom: 22%;
  @media screen and (max-width: 650px) {
    bottom: 6%;
  }
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  img {
    width: 35px;
    max-height: 35px;
  }
  p {
    margin: 1em 0 0 0;
    font-size: 0.85rem;
  }
  & > div {
    height: 100px;
    width: 100px;
    margin: 5px;
    border-radius: 50%;
    @include card-format;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 650px) {
    & > div {
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
}
.forecast {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  img {
    width: 35px;
    max-height: 35px;
  }
  p {
    font-size: 0.85rem;
  }
  &--time {
    margin: 0 0 0.5em 0;
  }
  &--temp {
    margin: 0.5em 0 0 0;
  }
  & > div {
    height: 100px;
    width: 100px;
    margin: 5px;
    border-radius: 50%;
    @include card-format;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 650px) {
    & > div {
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
}
</style>
