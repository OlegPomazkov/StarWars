<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/variables.scss";

html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background: $back_sec; 
}
#app {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
