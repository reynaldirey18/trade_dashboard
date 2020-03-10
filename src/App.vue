
<template>
 <div id="app">
  <router-view>kesini</router-view>
 </div>
</template>

<style lang="scss">
@import './assets/scss/customScssTready.scss';
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  font-family: 'Lato', sans-serif;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
