<template>
    <div class="index-m">
        <div class="index-btn common-btn" @click="goMineTeam">我的队伍<span class="tip">{{ count}}</span></div>
        <div class="index-btn common-btn" @click="goMineInfo">修改个人信息</div>
        <div class="team-info">
            <span class="team-label">队伍</span>
            <p class="team-name">{{ team.name}}</p>

        </div>
    </div>

</template>

<script>
    import {mapMutations, mapState, mapActions} from 'vuex'

    export default {
        name: "index",
        created: async function () {
            await this.showLoading('请稍等')
            await this.getApplyCount()
            await this.getTeam()
            await this.hideLoading('')

        },
        data: () => ({
            team: {
                name: ''
            },
            count: 0
        }),
        methods: {
            getTeam: async function () {
                const res = await this.fetch(this.API('getTeamInfo'))
                if (res.code < 0) {
                    this.showToast({title: res.msg, status: 'success'})
                    return
                }
                this.showToast(res.msg)
                this.team = res.data
            },
            ...mapMutations([
                'showToast',
                'showLoading',
                'hideLoading'
            ]),
            goMineInfo: function () {
                this.$router.push({name: 'mineInfo'})
            },
            getApplyCount: async function () {
                const res = await this.fetch(this.API('applyCount'))
                if (res.code < 0) {
                    this.showToast(res.msg)
                    return
                }
                this.showToast({title: res.msg, status: 'success'})
                this.count = res.data

            },
            goMineTeam: function () {
                this.$router.push({name: 'captainTeam'})
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../index-m";
</style>