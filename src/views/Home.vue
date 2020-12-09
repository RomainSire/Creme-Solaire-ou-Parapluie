<template>
  <div class="home">
    <ReactiveBackground
      imageUrl="https://media.routard.com/image/01/4/fb-perpignan.1543014.jpg"
    />
    <CityName />
  </div>
</template>

<script>
// @ is an alias to /src
import ReactiveBackground from '@/components/ReactiveBackground.vue'
import CityName from '../components/CityName.vue'

export default {
  name: 'Home',
  components: {
    ReactiveBackground,
    CityName
  }
}
</script>
