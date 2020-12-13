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
import { mapActions } from 'vuex'
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
  methods: {
    ...mapActions(['updateLocation'])
  },
  mounted: function() {
    this.updateLocation(this.$route.params.location)
  }
}
</script>
