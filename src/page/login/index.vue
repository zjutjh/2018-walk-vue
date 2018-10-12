<template>
    <div class="login-container">
        <yx-head></yx-head>
        <message :title="'报名须知'" :show="show" @cancel="show = false">
            <p>天气渐凉，又到了每年精弘毅行的季节了，</p>
            <p>叶子一片片飞舞而下，</p>
            <p>某一处山脉又将迎来熙熙攘攘的毅行人潮。</p>
            <p>这是一场盛大的相遇，</p>
            <p>也是精弘毅行与人一年一度不约而至的相遇，</p>
            <p>是不可辜负的好时光。</p>

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