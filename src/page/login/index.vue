<template>
    <div class="login-container">
        <yx-head></yx-head>
        <div class="login-content">
            <div class="user-type-radio">
                <div class="radio-item">

                    <input type="radio" name="user-type" id="stu" @change="test"><label for="stu" >我是学生</label>
                </div>
                <div class="radio-item">

                    <input type="radio" name="user-type" id="teacher"> <label for="teacher">我是老师</label>
                </div>
                <div class="radio-item">
                    <input type="radio" name="user-type" id="other"> <label for="other">我是校友/社会人士</label>
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
            test: function(e) {
                console.log(e)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "style";


    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }

</style>