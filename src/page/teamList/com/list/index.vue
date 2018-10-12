<template>
    <div class="listcontainer">
        <table>
            <tr>
                <td class="id">id</td>
                <td class="team-name">队伍名称</td>
                <td class="team-des">简介</td>
                <td class="team-nums">人数</td>
                <td class="team-apply">申请</td>
            </tr>
            <tr v-for="(item, index) in list" :key="'team_list_' + index" >
                <td class="id">{{item.id }}</td>
                <td class="team-name">{{ item.name}}</td>
                <td class="team-des">{{ item.description}}</td>
                <td class="team-nums">{{ item.members}}/{{ item.num}}</td>

                <td class="team-apply">
                    <div class="opearte-btn" :class="{'disable-btn': disable(item)}" @click="show.splice(index, 1, true)">{{ item.is_lock ? '已锁定' : '申请'}}</div>
                </td>
                <message :title="'申请队伍'" :show="show[index]" @cancel="show.splice(index, 1, false)">
                    <h1>队伍信息</h1>
                    <p>名称 <span>{{item.name}}</span> </p>
                    <p>简介 <span>{{ item.description}}</span></p>
                    <p>人数 <span>{{ item.members}}/{{ item.num}}</span></p>

                    <div class="btn-content">
                        <div class="btn success" @click="apply(item)">申请</div>
                    </div>

                </message>
            </tr>

        </table>

    </div>
</template>

<script>
    import {mapMutations, mapState, mapActions} from 'vuex'
    import Message from '../../../../components/message'
    export default {
        name: "index",
        props: ['list'],
        components: {
            Message
        },
        created: async function() {
            this.init()
        },
        data: () => ({
            show: [],
            state: false
        }),
        watch: {
          list: function(after, bofore) {
              this.init()
          }
        },
        methods: {
            disable: function (item) {
                if (item.members === item.num) {
                    return true
                }

                if (item.is_lock) {
                    return true
                }

                return false
            },
            apply: async function(item) {
                if (this.state) {
                    return
                }
                this.state = true
                if (this.disable(item)) {
                    this.state = false
                    return
                }

                const params = {
                    groupId: item.id
                }

                const res = await this.fetch(this.API('apply'), {
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
                this.$router.replace('/')
            },
            ...mapMutations([
                'showToast'
            ]),
            init: function() {
                this.show = []
                this.list.map(() => this.show.push(false))
            },
            showTest(index) {
                this.show[index] = true
                console.log(this.show)
                console.log(this.show[index])
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "style";

</style>