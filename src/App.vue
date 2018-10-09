<template>
  <div id="app">
    <toast></toast>
    <transition>
      <router-view/>
    </transition>


  </div>
</template>


<script>
  import Toast from './components/toast'
  import { mapMutations, mapState, mapActions } from 'vuex'

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
    font-family: 'PingFang SC', Helvetica, Arial, sans-serif, '黑体';
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
