<template>
  <div>
    <div class="blury-background" :style="BGstyle"></div>
    <div class="clear-background" :style="BGstyle"></div>
  </div>
</template>

<script>
export default {
  name: 'ReactiiveBackground',
  props: {
    imageUrl: String
  },
  computed: {
    BGstyle() {
      return `background-image: url('${this.imageUrl}')`
    }
  }
}
</script>

<style lang="scss" scoped>
.blury-background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: center/cover no-repeat;
  filter: blur(10px) sepia(60%);
  -webkit-filter: blur(10px) sepia(60%);
}
.clear-background {
  position: absolute;
  top: 15%;
  right: 15%;
  bottom: 20%;
  left: 15%;
  background: center/cover no-repeat;
  box-shadow: 0 0 20px #555;
}
</style>
