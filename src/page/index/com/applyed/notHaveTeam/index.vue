<template>

    <div class="index-m">
        <div class="index-btn common-btn" @click="toCreate">创建队伍</div>
        <div class="index-btn common-btn" @click="toFindTeam">寻找队伍</div>
        <div class="index-btn common-btn" @click="toUpdateMineInfo">修改个人信息</div>
        <div class="index-btn common-btn" v-if="user.campus !== '学生'" @click="goChange">切换身份</div>
    </div>
</template>

<script>
    import {mapMutations, mapState, mapActions} from 'vuex'

    export default {
        name: "index",
        methods: {
            toCreate: function () {
                this.$router.push({name: 'teamCreateOrUpdate', query: {type: 'create'}})
            },
            toFindTeam: function () {
                this.$router.push({name: 'teamList'})

            },
            toUpdateMineInfo: function () {
                this.$router.push({name: 'mineInfo'})
            },
            goChange: function() {
                this.$router.push({path: '/login', query: {change: 'change'}})
            }
        },
        computed: {
            ...mapState({
                user: (state) => state.auth.userInfo,
                token: (state) => state.auth.token
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../index-m";
</style>