<template>
    <div class="captain">
        <div class="team-apply" v-for="(item, index) in applyLists" :key="'apply_list-' + index">
            <div class="title">队伍申请</div>
            <div class="content">
                <div class="info">{{item.name}}（{{item.campus}}，{{ item.identity}}）申请加入你的队伍</div>
                <div class="operate">
                    <div class="agree btn" @click="agree(item)">同意</div>
                    <div class="refuse btn" @click="refuse(item)">拒绝</div>
                </div>

            </div>
        </div>

        <member-list :list="members" @update="getTeamLists" :captain="true"></member-list>

        <div class="operate">
            <div  v-if="!isLock" class="common-btn team-btn" @click="lockShow = true" >锁定队伍 <div class="tip">锁定队伍可以让队伍不能再报名</div></div>
            <div  v-else class="common-btn team-btn" @click="unlockShow = true">解锁队伍 <div class="tip">解锁队伍可以让队伍继续再报名</div></div>

            <div class="common-btn team-btn" @click="updateTeam">修改队伍信息 <div class="tip">锁定队伍后才能修改队伍信息</div> </div>

            <div class="common-btn team-btn" @click="breakShow = true">解散队伍</div>
        </div>

        <message :title="'锁定队伍'" @cancel="lockShow = false" :show="lockShow">
            <h1>你确定锁定队伍？</h1>
            <div class="btn-content">
                <div class="btn fail" @click="lockTeam">确定</div>
            </div>
        </message>
        <message :title="'解锁队伍'" @cancel="unlockShow = false" :show="unlockShow">
            <h1>你确定解锁队伍？</h1>
            <div class="btn-content">
                <div class="btn fail" @click="unlockTeam">确定</div>
            </div>
        </message>
        <message :title="'解散队伍'" @cancel="breakShow = false" :show="breakShow">
            <h1>你确定解散队伍？</h1>
            <div class="btn-content">
                <div class="btn fail" @click="breakTeam">确定</div>
            </div>
        </message>



    </div>
</template>

<script>
    import { mapMutations, mapState, mapActions } from 'vuex'
    import Message from '../../../../components/message'
    import MemberList from '../members'
    export default {
        name: "index",
        components: {
            MemberList,
            Message
        },
        created: async function() {
            await  this.showLoading('')
            await  this.getTeamLists()
            await this.getApplyLists()
            const res = await this.fetch(this.API('getTeamInfo'))
            if (res.code < 0) {
                this.showToast(res.msg)
                this.hideLoading('')
                return
            }
            await this.showToast({title: res.msg, status: 'success'})
            this.isLock = res.data.is_lock
            await this.hideLoading('')
        },
        data: () => ({
           members: [],
           applyLists: [],
           lockShow: false,
           unlockShow: false,
           breakShow: false,
           isLock: true,
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
                temp.sort((a, b) => { a.state.state - b.state.state})
                this.members = temp
            },
            getApplyLists: async function() {
                const res = await this.fetch(this.API('applyLists'))
                if (res.code < 0) {
                    this.showToast(res.msg)
                    return
                }
                this.showToast({title: res.msg, status: 'success'})
                this.applyLists = res.data
            },
            getTeamInfo: async function() {

            },
            agree: async function(item) {
                if (this.state) {
                    return
                }
                this.state = true

                const params = {
                    apply_id: item.id
                }
                const res = await this.fetch(this.API('agree'), {
                    data: params,
                    method: 'post'
                })

                if (res.code < 0) {
                    this.showToast(res.msg)
                    this.state = false
                    return
                }
                this.showToast({title: res.msg, status: 'success'})
                this.state = false
                this.getTeamLists()
                this.getApplyLists()
            },
            refuse: async function(item) {
                if (this.state) {
                    return
                }
                this.state = true

                const params = {
                    apply_id: item.id
                }
                const res = await this.fetch(this.API('refuse'), {
                    data: params,
                    method: 'post'
                })

                if (res.code < 0) {
                    this.showToast(res.msg)
                    this.state = false
                    return
                }
                this.showToast({title: res.msg, status: 'success'})
                this.state = false
                this.getTeamLists()
                this.getApplyLists()
            },
            lockTeam: async function() {
                if (this.state) {
                    return
                }
                this.state = true
                const res = await this.fetch(this.API('lock'))
                if (res.code < 0) {
                    this.showToast(res.msg)
                    this.state= false
                    return
                }
                this.showToast({title: res.msg, status: 'success'})
                this.state = false
                this.lockShow = false
                this.isLock = true


            },
            unlockTeam: async function() {
                if (this.state) {
                    return
                }
                this.state = true
                const res = await this.fetch(this.API('unlock'))
                if (res.code < 0) {
                    this.state = false
                    this.showToast(res.msg)
                    return
                }
                this.showToast({title: res.msg, status: 'success'})
                this.state = false
                this.unlockShow = false
                this.isLock = false
            },
            updateTeam: async function() {
                if (this.isLock) {
                    this.showToast('你不能修改信息')
                    return
                }
                this.$router.push({name: 'teamCreateOrUpdate'})

            },
            breakTeam: async function() {
                if (this.state) {
                    return
                }
                this.state = true
                const res = await this.fetch(this.API('break'))
                if (res.code < 0) {
                    this.showToast(res.msg)
                    this.state = false
                    return
                }
                this.showToast({title: res.msg, status: 'success'})
                this.state = false
                this.breakShow = false
                this.$router.replace('/')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "style";

</style>