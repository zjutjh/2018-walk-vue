<template>
    <div class="create-container">
        <yx-head></yx-head>
        <div class="content">
            <div class="form">
                <div class="item">
                    <label for="">队伍名称</label><input type="text" placeholder="请输入队伍名称">
                </div>
                <div class="item">
                    <label for="">队伍简介</label><input type="text" placeholder="请输入队伍简介">
                </div>
                <div class="item touch">
                    <label for="" >最大人数</label>
                    <select class="h">
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                    </select>
                </div>
                <div class="common-btn create-btn">创建队伍</div>
            </div>



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

</style>