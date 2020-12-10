<template>
  <form autocomplete="off">
    <label for="city">Ville</label>
    <input type="text" id="city" v-model="city" :style="adaptativeWidth" />
  </form>
</template>

<script>
export default {
  name: 'CityName',
  data: function() {
    return {
      city: 'Perpignan',
      fontSizePx: 50
    }
  },
  computed: {
    adaptativeWidth() {
      return `font-size: ${this.fontSizePx}px; width: ${(this.city.length + 1) *
        (this.fontSizePx / 1.4)}px;`
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
  top: 30%;
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
