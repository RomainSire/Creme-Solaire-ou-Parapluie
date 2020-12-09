<template>
  <div class="home">
    <ReactiveBackground
      imageUrl="https://media.routard.com/image/01/4/fb-perpignan.1543014.jpg"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ReactiveBackground from '@/components/ReactiveBackground.vue'

export default {
  name: 'Home',
  components: {
    ReactiveBackground
  }
}
</script>
