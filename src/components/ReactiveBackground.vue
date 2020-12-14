<template>
  <div>
    <div class="blury-background" :style="adaptativeBackgroundImage"></div>
    <div class="clear-background" :style="adaptativeBackgroundImage"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ReactiiveBackground',
  data: function() {
    return {
      image: ''
    }
  },
  computed: {
    ...mapState(['location']),
    adaptativeBackgroundImage() {
      return `background-image: url('${this.image}')`
    }
  },
  methods: {
    getimageUrl() {
      const axios = require('axios').default
      axios
        .get(
          `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${this.location}&key=${process.env.VUE_APP_GPLACE_KEY}&inputtype=textquery&language=fr&fields=name,photos`
        )
        .then(async data => {
          const photoReference =
            data.data.candidates[0].photos[0].photo_reference
          console.log(photoReference)
          const imageURLQuery = await fetch(
            `https://maps.googleapis.com/maps/api/place/photo?photoreference=${photoReference}&key=${process.env.VUE_APP_GPLACE_KEY}&maxwidth=1000&maxheight=800`
          )
            .then(r => r.blob())
            .catch(console.error)
          this.image = URL.createObjectURL(imageURLQuery)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted() {
    this.getimageUrl()
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
  @media screen and (max-width: 650px) {
    top: 5%;
    right: 5%;
    bottom: 5%;
    left: 5%;
  }
  background: center/cover no-repeat;
  box-shadow: 0 0 20px #555;
}
</style>
