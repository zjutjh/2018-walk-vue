<template>
    <div class="container">
        <yx-head></yx-head>
        <show></show>
        <div class="route-m">
            <div class="bk"></div>
            <keep-alive>
                <router-view/>
            </keep-alive>

            <index-footer></index-footer>
        </div>


    </div>

</template>

<script>
    import YxHead from '../../components/head'
    import Show from './com/showInfo'
    import IndexFooter from './com/indexFooter'
    import * as state from '../../common/utils/constant'
    import {mapMutations, mapState, mapActions} from 'vuex'

    export default {
        name: "index",
        components: {
            YxHead,
            Show,
            IndexFooter
        },
        data: () => ({
        }),
        created: async function () {
            this.showLoading('认证中')
            if (!this.token || !this.user) {
                let search = window.location.search

                if (search) {
                    await this.autologin(this)
                } else {
                    await this.login(this)
                }
            }
            this.hideLoading('')

        },
        mounted: async function() {
            console.log(this.token)
            console.log(this.user)
            if (!this.token || !this.user) {
                return
            }
            console.log('login')
            this.login(this)
        },
        methods: {
            ...mapActions([
                'login',
                'autologin'
            ]),
            ...mapMutations([
                'showToast',
                'showLoading',
                'hideLoading'
            ])

        },
        watch: {
            user: async function (after, before) {
                if (after) {
                    switch (this.user.state.state) {
                        case state.NOTAPPLY:
                            this.$router.replace({name: 'notApply'});
                            break
                        case state.APPLYING:
                            this.$router.replace({name: 'applying'});
                            break
                        case state.NOTHAVETEAM:
                            this.$router.replace({name: 'notHaveTeam'});
                            break
                        case state.HAVETEAMISCAPTAIN:
                            this.$router.replace({name: 'captain'});
                            break
                        case state.HAVETEAMISMEMBER:
                            this.$router.replace({name: 'member'});
                            break
                        case state.NOTDETAIL:
                            this.$router.replace({name: 'mineInfo', query: { type: 'create'}});
                            break
                        default:
                            this.login(this)
                    }

                }
            },
            '$route': function (after, before) {

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
    @import "style";

</style>