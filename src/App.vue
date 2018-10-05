<template>
  <div id="app">
    <toast></toast>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition>
      <router-view/>
    </transition>

  </div>
</template>


<script>
  import Toast from './components/toast'

  export default {
      name: 'App',
      components: {
          Toast
      }
  }
</script>

<style lang="scss">
  html, body {
    height: 100%;
    width: 100%;
    font-family: 'PingFang SC', Helvetica, Arial, sans-serif;
  }
  #app {
    position: relative;
    display: flex;
    flex: 1;
    align-self: stretch;
    flex-direction: column;
    min-height: 100%;
    overflow: hidden;
  }
  .container {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
  }
  @media (min-width: 560px) {
    #app {
      margin: 0 auto;
      max-width: 560px;
      border-style: dashed;
      border-color: rgba(0, 0, 0, .1);
      border-width: 0 1px;
    }
    .container {
      margin: 0 auto;
      max-width: 560px;
    }
  }
</style>
