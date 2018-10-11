<template>
    <div class="list-container">
        <header>
            <div class="head-bk">队伍列表</div>
        </header>

        <div class="search">
            <label for="" @click="search"><img src="./com/img/search.png" alt=""></label>
            <input v-model="query_string" type="text" placeholder="搜索队伍id/名称">
        </div>
        <list :list="page.data"></list>
        <div class="change-page">
            <div class="c-btn" @click="changePage(page.last_page_url)">上一页</div>
            <div class="page-num">{{ page.current_page}}/{{ totalPage}}</div>
            <div class="c-btn" @click="changePage(page.next_page_url)">下一页</div>
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
                current_page: 0,
                total: 0,
                next_page_url: '',
                data:[]
            },
            query_string: ''

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
            changePage: async function(url) {
                await this.showLoading('')
                await this.getPageInfo(url)
                await this.hideLoading('')
            },
            search: async function() {
                if (!this.query_string) {
                    this.showToast('不能为空')
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
                    return
                }

                this.showToast({title: res.msg, status: 'success'})
                this.query_string = ''
                this.page = res.data

            }
        },
        computed: {
            totalPage: function(){
                return Math.ceil(page.total / 15)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "style";

</style>