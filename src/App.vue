<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto&display=swap');
// font-family: 'Montserrat', sans-serif;
// font-family: 'Roboto', sans-serif;
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
