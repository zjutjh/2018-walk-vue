<template>
    <div class="member">
        <member-list :list="members"></member-list>
        <div class="operate">

            <div class="common-btn team-btn" @click="leavelShow = true">离开队伍</div>

        </div>

        <message :title="'离开队伍'" @cancel="leavelShow = false" :show="leavelShow" captain>
            <h1>你确定离开队伍？</h1>
            <div class="btn-content">
                <div class="btn fail" @click="leavelTeam">确定</div>
            </div>
        </message>

    </div>
    
</template>

<script>
    import MemberList from '../members'
    import Message from '../../../../components/message'
    import { mapMutations, mapState, mapActions } from 'vuex'

    export default {
        name: "index",
        components: {
            MemberList,
            Message
        },
        created: async function() {
          this.getTeamLists()
        },
        data: () => ({
            leavelShow: false,
            members: []

        }),
        methods: {
            ...mapMutations([
                'showToast'
            ]),
            getTeamLists: async function() {
                const res = await this.fetch(this.API('teamMmbers'))
                if (res.code < 0) {
                    this.showToast(res.msg)
                    return
                }
                this.showToast({title: res.msg, status: 'success'})
                const temp = res.data
                temp.sort((a, b) => { a.state.state - b.state.state})
                this.members = temp
            },
            leavelTeam: async function() {
                const res = await this.fetch(this.API('leavel'))
                if (res.code < 0) {
                    this.showToast(res.msg)
                    return
                }
                this.showToast({title: res.msg, status: 'success'})
                this.$router.replace('/')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "style";

</style>