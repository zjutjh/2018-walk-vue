<template>
    <div class="login-container">
        <yx-head></yx-head>
        <message :title="'报名须知'" :show="show" @cancel="show = false">
            <p>特别注意：</p>
            <p>*今年在朝晖新设有一条全程路线，朝晖校区的同学可在朝晖参加毅行！</p>
            <p>*若朝晖同学报名屏峰校区线路，请自行前往屏峰校区参加！屏峰同学暂无法选择朝晖路线，敬请谅解。</p>
            <p>*屏峰全程路线的部分路段有一定难度，请同学们慎重选择路线，量力而行！</p>
            <p>*报名队伍数量限制：屏峰1200支队伍，朝晖无数量限制。每队需有队员4-6人（若队伍内未满4人，则队伍不成立）。</p>
            <p>*消息通过精弘网络服务号推送！！！请一定关注“浙江工业大学精弘网络“（zjutjh）服务号！！！</p>
            <p>具体路线请关注“精小弘在线”（jxhzjut）微信公众号下载查看</p>
            <!--<p>是不可辜负的好时光。</p>-->

        </message>
        <div class="login-content">
            <div class="user-type-radio">
                <div class="radio-item">

                    <input type="radio" name="user-type" id="stu" v-model="type" value="学生"><label for="stu" >我是学生</label>
                </div>
                <div class="radio-item">

                    <input type="radio" name="user-type" id="teacher" v-model="type" value="教职工"> <label for="teacher">我是教职工</label>
                </div>
                <div class="radio-item">
                    <input type="radio" name="user-type" id="school" v-model="type" value="校友" > <label for="school">我是校友</label>
                </div>
                <div class="radio-item">
                    <input type="radio" name="user-type" id="other" v-model="type" value="其他"> <label for="other">我是其他</label>
                </div>
            </div>


                <router-view/>


            <div class="bk"></div>

        </div>

    </div>
</template>

<script>
    import Message from '../../components/message'
    import YxHead from '../../components/head'
    export default {
        name: "index",
        components: {
            YxHead,
            Message
        },
        methods: {

        },
        created: async function() {
            if (this.$route.query.change !== 'change') {
                return
            }
            this.change = this.$route.query.change
        },
        data:() => ({
            type: '学生',
            change: '',
            show: true
        }),
        watch: {
            type: function (new_type, old_type) {
                if (new_type === '学生') {
                    this.$router.replace({path: '/login', query: {type: new_type, change: this.change}})
                } else {
                    this.$router.replace({name: 'other', query: {type: new_type, change: this.change}})
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "style";


    /*.fade-enter-active, .fade-leave-active {*/
        /*transition: opacity .5s*/
    /*}*/
    /*.fade-enter, .fade-leave-active {*/
        /*opacity: 0*/
    /*}*/

    .slide-fade-enter-active {
        transition: all 1s ease;
    }
    .slide-fade-leave-active {


        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to

        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(10px);
        position: absolute;
        left: -100%;
        opacity: 0;
    }
</style>