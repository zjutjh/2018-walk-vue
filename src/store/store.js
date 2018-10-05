import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const env = process.env.NODE_ENV || 'production'
const debug = env !== 'production'

export default new Vuex.Store({
    debug,
    env,
    modules: {

    }
})
