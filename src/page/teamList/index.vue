<template>
    <div class="list-container">
        <header>
            <div class="head-bk">队伍列表</div>
        </header>

        <div class="search">

            <input v-model="query_string" type="text" placeholder="搜索队伍id/名称">
            <label for="" @click="search"><img src="./com/img/search.png" alt=""></label>
        </div>
        <list :list="page.data"></list>
        <div class="change-page">
            <div class="c-btn" @click="changePage(page.current_page - 1)">上一页</div>
            <div class="page-num">{{ page.current_page}}/{{ totalPage}}</div>
            <div class="c-btn" @click="changePage(page.current_page + 1)">下一页</div>
        </div>
        <div class="bk"></div>
    </div>

</template>

<script>
    import List from './com/list'
    import {mapMutations, mapState, mapActions} from 'vuex'

    export default {
        name: "index",
        components: {
            List
        },
        data: () => ({
            page: {
                last_page_url: '',
                current_page: 1,
                total: 0,
                next_page_url: '',
                data:[]
            },
            query_string: '',
            state: false

        }),
        created: async function() {
            this.getPageInfo()
        },
        methods: {
            ...mapMutations([
                'showToast',
                'showLoading',
                'hideLoading'
            ]),
            getPageInfo: async function(url) {
                url = url || this.API('teamLists')
                const res = await this.fetch(url)
                if (res.code < 0) {
                    this.showToast(res.msg)
                    return
                }
                this.showToast({title: res.msg, status: 'success'})
                this.page = res.data
            },
            changePage: async function(page) {
                if (page < 1) {
                    this.showToast('不能继续了')
                    return
                }
                if (page > this.totalPage) {
                    this.showToast('不能往下了')
                    return
                }
                const url = 'http://walk.zjutjh.com/team/list?page=' + page
                await this.showLoading('')
                await this.getPageInfo(url)
                await this.hideLoading('')
            },
            search: async function() {
                if (this.state) {
                    return
                }

                this.state = true
                if (!this.query_string) {
                    this.showToast('不能为空')
                    this.state = false
                    return
                }

                const params = {
                    query_string: this.query_string
                }

                const res = await this.fetch(this.API('search'), {
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
                this.query_string = ''
                this.page = res.data

            }
        },
        computed: {
            totalPage: function(){
                return Math.ceil(this.page.total / 15)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "style";

</style>