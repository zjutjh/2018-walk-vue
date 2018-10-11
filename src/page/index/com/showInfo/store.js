


export const state = {
    time: null,
    teamNums: 0,
    userNums: 0,
    finishTime: null
}


export const getters = {
    time: (state, getters) => {
        return state.time
    },
    teamNums: (state, getters) => {
        return state.teamNums
    },
    userNums: (state, getters) => {
        return state.userNums
    },
    finishTime: (state, getters) => {
        return state.finishTime
    }
}



export const mutations = {
    updateTime: (state, payload) => {
        state.time = payload
    },
    updateNums: (state, payload) => {
        state.teamNums = payload.teamNums
        state.userNums = payload.userNums
        state.finishTime = new Date(payload.finishTime)
    },
    deleteTime: (state, payload) => {
        clearInterval(state.time)
        state.time = null
    }
}

export const actions = {
    async getIndexInfo(context, vue) {
        const res = await vue.fetch(vue.API('index'))
        const nums = {
            teamNums: res.data.team_count,
            finishTime: res.data.finish_time,
            userNums: res.data.apply_count
        }
        context.commit('updateNums', nums)


    }


}