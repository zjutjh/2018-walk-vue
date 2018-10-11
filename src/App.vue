<template>
  <div id="app">
    <toast></toast>
    <keep-alive>
    <transition name="fade">
      <router-view/>
    </transition>
    </keep-alive>


  </div>
</template>


<script>
  import Toast from './components/toast'
  import { mapMutations, mapState, mapActions } from 'vuex'

  export default {
      name: 'App',
      components: {
          Toast
      },
      created: async function() {
          const res = await this.fetch(this.API('verifyApplyEnd'))

          if (res.code < 0) {
              return
          }

          this.$router.replace('/finish')

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

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
