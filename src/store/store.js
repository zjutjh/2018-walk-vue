import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from './auth'
import * as toast from './toast'
import * as show from '../page/index/com/showInfo/store'

Vue.use(Vuex)

const env = process.env.NODE_ENV || 'production'
const debug = env !== 'production'

export default new Vuex.Store({
    debug,
    env,
    modules: {
        auth,
        toast,
        show

    }
})
