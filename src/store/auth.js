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
        state.token = payload
    },
    updateUserInfo: (satte, payload) => {
        state.userInfo = payload
    }
}

export const actions = {
    async login (context, vue) {
        const res = await vue.fetch(vue.API('getUserInfo'))
        context.commit('updateUserInfo', res.data)
    },

    async runAfterLogin (context, func) {
        const token = context.state.token
        const userInfo = context.state.userInfo
        // 如果未登录，跳转微信认证页面
        if (!token || !userInfo) {
            if (env === 'development') {
                location.href = '/#/auth?code=12345'
            } else {
                location.href = 'https://boomerang.zhutianyu.top/oauth'
            }

            return
        }

        // 否则执行函数
        if (typeof func === 'function') {
            func()
        }
    }
}