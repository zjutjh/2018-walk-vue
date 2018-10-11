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
          this.getApplyTeam()
        },
        data: () => ({
            team: {
                name: ''
            }
        }),
        methods: {
            ...mapMutations([
                'showToast'
            ]),
            deleteApply: async function() {
                const  res = await this.fetch(this.API('applyDelete'))
                if (res.code < 0) {
                    this.showToast(res.msg)
                    return
                }
                this.showToast(res.msg)
                this.$router.replace('/')
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