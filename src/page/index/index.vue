<template>
    <div class="container">
        <yx-head></yx-head>
        <show></show>
        <div class="route-m">
            <div class="bk"></div>
            <keep-alive>
                <router-view/>
            </keep-alive>

            <index-footer></index-footer>
        </div>


    </div>

</template>

<script>
    import YxHead from '../../components/head'
    import Show from './com/showInfo'
    import IndexFooter from './com/indexFooter'

    export default {
        name: "index",
        components: {
            YxHead,
            Show,
            IndexFooter
        }
    }
</script>

<style lang="scss" scoped>
    @import "style";

</style>