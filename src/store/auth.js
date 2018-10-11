import Vue from 'vue'
const env = process.env.NODE_ENV

export const state = {
    token: null,
    userInfo: null
}

export const getters = {
    token: (state, getters) => {
        return state.token
    },
    userInfo: (state, getters) => {
        return state.userInfo
    }
}


export const mutations = {
    updateUserToken: (state, payload) => {
        state.token = payload.token
        payload.vue.cookie.setCookie('token', payload.token, 365)

    },
    updateUserInfo: (satte, payload) => {
        state.userInfo = payload
    }
}

export const actions = {
    async login(context, vue) {
        const token = vue.cookie.getCookie('token')
        if (!token) {
            context.dispatch('runAfterLogin')
            return
        }
        const temp = {
            token: token,
            vue: vue
        }
        context.commit('updateUserToken', temp)

        const res = await vue.fetch(vue.API('getUserInfo'))
        if (res.code < 0) {
            context.commit('showToast', res.msg)
            context.dispatch('runAfterLogin')
            return
        }

        const tem = {
            token: res.data.token,
            vue: vue
        }
        context.commit('updateUserToken', tem)
        context.commit('updateUserInfo', res.data.user)
        context.commit('showToast', {title: '认证成功', status: 'success'})
    },

    async runAfterLogin(context, vue) {
        const token = context.state.token
        const userInfo = context.state.userInfo
        // 如果未登录，跳转微信认证页面
        if (!token || !userInfo) {
            if (env === 'development') {
                location.href = 'http://localhost:8000/oauth'
            } else {
                location.href = 'https://boomerang.zhutianyu.top/oauth'
            }

            return
        }

        // 否则执行函数
        if (typeof func === 'function') {
            func()
        }
    },
    async autologin(context, vue) {
        console.log(context)

        const search = window.location.search
        const code = search.split('?')[1].split('&')[0].split('=')[1]

        const res = await vue.fetch(vue.API('auto'), {
            data: {
                code
            },
            method: 'POST'
        })
        if (res.code < 0) {
            context.commit('showToast', '认证失败')
            return
        }
        const temp = {
            token: res.data.token,
            vue: vue
        }
        context.commit('updateUserToken', temp)
        context.commit('updateUserInfo', res.data.user)
        context.commit('showToast', {title: '认证成功', status: 'success'})


    }
}