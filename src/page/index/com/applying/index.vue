<template>
    <div class="index-m">
        <div class="index-btn common-btn" @click="deleteApply">撤回申请</div>

        <div class="team-info">
            <span class="team-label">申请中</span>
            <p class="team-name">{{ team.name}}</p>

        </div>
    </div>
</template>

<script>
    import {mapMutations, mapState, mapActions} from 'vuex'
    export default {
        name: "index",
        created: async function() {
          await this.getApplyTeam()
        },
        data: () => ({
            team: {
                name: ''
            },
            state: false
        }),
        methods: {
            ...mapActions([
                'login'
            ]),
            ...mapMutations([
                'showToast'
            ]),
            deleteApply: async function() {
                if (this.state) {
                    return
                }
                this.state = true
                const  res = await this.fetch(this.API('applyDelete'))
                if (res.code < 0) {
                    this.showToast(res.msg)
                    this.state = false
                    this.$router.replace('/')
                    await this.login(this)
                    return
                }
                await this.showToast({title: res.msg, status: 'success'})
                this.state = false

                this.$router.replace('/')
                await this.login(this)
            },
            getApplyTeam: async function() {
                const res = await this.fetch(this.API('getApplyTeam'))
                if (res.code < 0) {
                    this.showToast(res.msg)
                    return
                }
                this.showToast({title: res.msg, status: 'success'})
                this.team = res.data
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../index-m";
</style>