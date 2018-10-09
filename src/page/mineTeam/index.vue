<template>
    <div class="mine-team">
        <header>
            <div class="head-bk">队伍列表</div>
        </header>

        <keep-alive>
            <router-view/>
        </keep-alive>
        <div class="bk"></div>

    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
    @import "style";
</style>