<template>
    <div class="login-container">
        <yx-head></yx-head>
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

            <transition name="fade">
                <router-view/>
            </transition>

            <div class="bk"></div>

        </div>

    </div>
</template>

<script>
    import YxHead from '../../components/head'
    export default {
        name: "index",
        components: {
            YxHead
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
            change: ''
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
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>