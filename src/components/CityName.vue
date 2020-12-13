<template>
  <form autocomplete="off" v-on:submit="onSubmitForm">
    <label for="city">Ville</label>
    <input type="text" id="city" v-model.lazy="location" />
  </form>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'CityName',
  data() {
    return {
      city: this.$route.query.location
    }
  },
  computed: {
    location: {
      get() {
        return this.$store.state.location
      },
      set(value) {
        this.$store.commit('UPDATE_LOCATION', value)
      }
    }
  },
  methods: {
    onSubmitForm(e) {
      e.preventDefault()
      // this.$emit('cityChanged', this.location)
    }
  },
  watch: {
    location(newVal) {
      this.$router.push(`/${newVal}`)
    },
    '$route.location': function(val) {
      this.location = val
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
  top: 27%;
  @media screen and (max-width: 650px) {
    top: 12%;
  }
  left: 50%;
  transform: translateX(-50%);
  width: 330px;
  // background & border
  background: #333d;
  border: 0.15em solid #fff;
  box-shadow: 0 0 10px #3338;
  // text
  color: #fff;
  text-align: center;
  font-family: 'Ubuntu Mono', monospace;
  text-transform: uppercase;
  font-size: 40px;
}
</style>
