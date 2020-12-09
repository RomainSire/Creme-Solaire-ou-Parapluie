<template>
  <div>
    <div class="blury-background" :style="adaptativeBackgroundImage"></div>
    <div class="clear-background" :style="adaptativeBackgroundImage"></div>
  </div>
</template>

<script>
export default {
  name: 'ReactiiveBackground',
  props: {
    imageUrl: String
  },
  computed: {
    adaptativeBackgroundImage() {
      return `background-image: url('${this.imageUrl}')`
    }
  }
}
</script>

<style lang="scss" scoped>
.blury-background {
  position: absolute;
  z-index: -10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: center/cover no-repeat;
  filter: blur(10px) sepia(60%);
}
.clear-background {
  position: absolute;
  z-index: -5;
  top: 15%;
  right: 15%;
  bottom: 15%;
  left: 15%;
  background: center/cover no-repeat;
  box-shadow: 0 0 20px #555;
}
</style>
