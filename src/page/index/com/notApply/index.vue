<template>
    <div class="index-m">
        <div class="index-btn common-btn" @click="goLogin">立即报名</div>

    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {
            goLogin: function () {
                this.$router.push('/login')
            }
        }
    }
</script>

<style lang="scss"scoped>
    @import "../index-m";

</style>