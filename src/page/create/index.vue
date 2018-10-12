<template>
    <div class="create-container">
        <yx-head></yx-head>
        <div class="content">
            <div class="form">
                <div class="item">
                    <label for="">队伍名称</label><input v-model="form.name" type="text" placeholder="请输入队伍名称">
                </div>
                <div class="item">
                    <label for="">队伍简介</label><input v-model="form.description" type="text" placeholder="请输入队伍简介">
                </div>
                <div class="item touch">
                    <label for=""  >最大人数</label>
                    <select class="h" v-model="form.num">
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
                <div class="item touch">
                    <label for="" >出发校区</label>
                    <select class="h" v-model="form.start_campus">
                        <option value="屏峰">屏峰</option>
                        <option value="朝晖">朝晖</option>
                    </select>
                </div>
                <div class="item touch">
                    <label for="" >路线选择</label>
                    <select class="h" v-model="form.select_route">
                        <option value="半程">半程</option>
                        <option value="全程">全程</option>
                    </select>
                </div>
                <div class="common-btn create-btn" @click="createOrpUpdate">{{ type === 'create' ? '创建队伍' :'更新信息'}}</div>
            </div>

            <div class="bk"></div>
        </div>
    </div>
    
</template>

<script>
    import YxHead from '../../components/head'
    import { mapMutations, mapState, mapActions } from 'vuex'

    export default {
        name: "index",
        data: () => ({
            form: {
                name: '',
                description: '',
                start_campus: '屏峰',
                num: '4',
                select_route: '半程'

            },
            type: 'update',
            state: false
        }),
        created: async function() {
            if (this.$route.query.type !== 'create') {
                this.getTeamInfo()
                return
            }
            this.type = this.$route.query.type
        },
        components: {
            YxHead
        },
        methods: {
            test: function(e) {
                console.log(e)
            },
            isEmpty: function() {
                if (!this.form.name) {
                    this.showToast('名称不能为空')
                    return false
                }
                if (!this.form.description) {
                    this.showToast('描述不能为空')
                    return false
                }
                return true


            },
            createOrpUpdate: async function() {
                if (this.state) {
                    return
                }
                this.state = true
                if (!this.isEmpty()) {
                    this.state = false
                    return
                }

                this.showLoading('')
                const params = this.form
                const res = await this.fetch(this.API(this.type), {
                    data: params,
                    method: 'post'
                })
                if (res.code < 0) {
                    this.hideLoading('')
                    this.showToast(res.msg)
                    this.state = false

                    return
                }
                this.hideLoading('')
                this.showToast({titel: res.msg, status: 'success'})
                this.state = false
                if (this.$route.query.type !== 'create') {
                    this.$router.replace({name: 'captainTeam'})
                    return
                }
                this.$router.replace('/')

            },
            getTeamInfo: async function() {
                const res = await this.fetch(this.API('getTeamInfo'))
                if (res.code < 0) {
                    show.showToast(res.msg)
                    this.$router.replace('/')
                    return
                }

                Object.keys(this.form).map((name) => {
                    this.form[name] = res.data[name]
                })


            },
            ...mapMutations([
                'showToast',
                'showLoading',
                'hideLoading'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    @import "style";

</style>