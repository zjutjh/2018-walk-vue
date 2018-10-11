<template>
    <div class="finsh-container">
        <yx-head></yx-head>
        <div class="show-container">
            <div class="show-title"></div>
            <div class="show-time">报名已经关闭</div>

        </div>
        <index-footer></index-footer>
        <div class="bk"></div>

    </div>


</template>

<script>
    import YxHead from '../../components/head'
    import IndexFooter from '../index/com/indexFooter'


    export default {
        name: "index",
        components: {
            YxHead,
            IndexFooter
        }
    }
</script>

<style lang="scss" scoped>
    @import "../index/com/showInfo/style";
    @import "style";

</style>