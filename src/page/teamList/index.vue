
<template>
    <div class="list-container">
        <header>
            <div class="head-bk">队伍列表</div>
        </header>

        <div class="search">
            <label for=""><img src="./com/img/search.png" alt=""></label>
            <input type="text" placeholder="搜索队伍id/名称">
        </div>
        <list></list>
        <div class="change-page">
            <div class="c-btn">上一页</div>
            <div class="page-num">12/233</div>
            <div class="c-btn">下一页</div>


        </div>
        <div class="bk"></div>

    </div>
    
</template>

<script>
    import List from './com/list'
    export default {
        name: "index",
        components: {
            List
        }
    }
</script>

<style lang="scss" scoped>
    @import "style";

</style>