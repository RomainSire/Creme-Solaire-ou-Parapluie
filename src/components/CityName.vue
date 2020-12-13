<template>
  <form autocomplete="off" v-on:submit="onSubmitForm">
    <label for="city">Ville</label>
    <input type="text" id="city" v-model="location" :style="adaptativeWidth" />
  </form>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CityName',
  // props: {
  //   location: String
  // },
  data: function() {
    return {
      fontSizePx: 50
    }
  },
  computed: {
    ...mapState(['location']),
    adaptativeWidth() {
      return `font-size: ${this.fontSizePx}px; width: ${(this.location.length +
        1) *
        (this.fontSizePx / 1.7)}px;`
    }
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault()
      // this.$emit('cityChanged', this.location)
    }
  }
}
</script>

<style lang="scss" scoped>
label {
  display: none;
}
input {
  // position & size
  position: absolute;
  top: 25%;
  @media screen and (max-width: 650px) {
    top: 10%;
  }
  left: 50%;
  transform: translateX(-50%);
  min-width: 200px;
  max-width: 85%;
  // background & border
  background: #333d;
  border: 0.15em solid #fff;
  box-shadow: 0 0 10px #3338;
  // text
  color: #fff;
  text-align: center;
  font-family: 'Ubuntu Mono', monospace;
  text-transform: uppercase;
}
</style>
