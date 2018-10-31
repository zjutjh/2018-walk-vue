<template>
    <div class="member">
        <member-list :list="members"></member-list>

        <div class="info">
            <p v-if="members.length < 4">你的队伍未达到参与要求，必须满4人或4人以上，才能有参与精弘毅行的要求</p>
            <p v-else>你的队伍已经达到参与精弘毅行要求，但需等报名结束之后如果你的队伍成功位列前1200支达成要求的队伍才算报名成功报名精弘毅行</p>
        </div>
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
            await this.getTeamLists()
        },
        data: () => ({
            leavelShow: false,
            members: [],
            state: false

        }),
        methods: {
            ...mapMutations([
                'showToast',
                'showLoading',
                'hideLoading'
            ]),
            getTeamLists: async function() {
                const res = await this.fetch(this.API('teamMmbers'))
                if (res.code < 0) {
                    this.showToast(res.msg)
                    return
                }
                this.showToast({title: res.msg, status: 'success'})
                const temp = res.data
                temp.sort((a, b) => {
                    if (a.state.state > b.state.state) {
                        return 1;
                    } else {
                        return 0
                    }
                })
                console.log(temp)
                this.members = temp
            },
            leavelTeam: async function() {
                if (this.state) {
                    return
                }
                this.showLoading('')
                this.state = true
                const res = await this.fetch(this.API('leavel'))
                if (res.code < 0) {
                    this.hideLoading('')
                    this.leavelShow = false
                    this.showToast(res.msg)
                    this.state =false
                    return
                }
                this.hideLoading('')
                this.showToast({title: res.msg, status: 'success'})
                this.state = false
                this.$router.replace('/')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "style";

</style>