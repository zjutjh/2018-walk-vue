<template>
    <div class="member-list">
            <div class="head">
                <span class="name">姓名</span><span class="phone">手机号</span><span class="campus">校区</span><span
                    class="operate">操作</span>
            </div>
            <div class="line bk"></div>
            <div class="content " v-for="(item, index) in list" :key="'member_list_' + index">
                <div class="is-captain" v-if="index === 0"><img src="../img/head.png" alt=""></div>
                <span class="name">{{ item.name}}</span> <span class="phone">{{ item.phone}}</span><span class="campus">{{ item.campus}}</span><span
                    class="operate"><div class="opearte-btn btn" @click="showMes(index)" :class="{'dis': index === 0 && captain}"> {{ captain ? '点击操作' : '点击查看'}}</div></span>
                <message :title="'对 ' + item.name + ' (' + item.campus + ') 进行操作'" :show="show[index]" @cancel="show.splice(index, 1, false)">
                    <h1>额外信息</h1>
                    <p>姓名 <span>{{ item.name}}</span></p>
                    <p>微信 <span>{{item.wx_id}}</span> </p>
                    <p>QQ <span>{{ item.qq}}</span></p>
                    <p>身份 <span>{{ item.identity}}</span></p>

                    <div class="btn-content" v-if="captain">
                        <div class="btn fail" @click="deleteMem(item)">踢出队伍</div>
                    </div>
                </message>

            </div>
    </div>

</template>

<script>
    import Message from '../../../../components/message'
    import {mapMutations, mapState, mapActions} from 'vuex'

    export default {
        name: "index",
        components: {
          Message
        },
        props: ['list', 'captain'],
        created: async function() {
            this.init();
        },
        data: () => ({
            show: []
        }),
        methods: {
            init: function() {
                this.show = []
                this.list.map(() => this.show.push(false))
            },
            deleteMem: async function(item) {
                const params = {
                    delete_id: item.id
                }

                const res = await this.fetch(this.API('delete'), {
                    data: params,
                    method: 'post'
                })

                if (res.code < 0) {
                    this.showToast(res.msg)
                    return
                }

                this.showToast({title: res.msg, status: 'success'})
                this.$emit('update')


            },
            showMes(index) {
              if (this.captain && index === 0) {
                  return
              }
                this.show.splice(index, 1, true)
            },
            ...mapMutations([
                'showToast'
            ])
        },
        watch: {
            list: function(after, before) {
                this.init()
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import "style";

</style>