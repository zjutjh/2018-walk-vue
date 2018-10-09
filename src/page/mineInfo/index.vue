<template>
    <div class="mine-info">
        <yx-head></yx-head>
        <div class="info-form">
            <div class="form">
                <div class="item">
                    <label for="">姓名</label><input type="text">
                </div>
                <div class="item touch">
                    <label for="" >校区</label>
                    <select class="h">
                        <option value="">屏峰</option>
                        <option value="">朝晖</option>
                    </select>
                </div>
                <div class="item">
                    <label for="">手机号</label><input type="text" placeholder="请输入手机号">
                    <div class="tip">手机号用于组员间的联系，请务必填写正确</div>
                </div>
                <div class="item">
                    <label for="">身份证号码</label><input type="text" placeholder="请输入身份证号码">
                    <div class="tip">身份证号会用于活动开始前的身份验证</div>
                </div>
                <div class="item">
                    <label for="">重复身份证号码</label><input type="text" placeholder="请再次输入身份证号码">
                </div>
                <div class="item">
                    <label for="">身高</label><input type="text" placeholder="请输入身高 例如：170" >
                </div>
                <div class="item">
                    <label for="">邮箱</label><input type="text" placeholder="请输入邮箱">
                </div>
                <div class="item">
                    <label for="">QQ</label><input type="text" placeholder="选填">
                </div>
                <div class="item">
                    <label for="">微信号</label><input type="text" placeholder="选填">
                </div>

                <div class="common-btn save-btn">保存修改</div>
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
        }
    }
</script>

<style lang="scss" scoped>
    @import "style";

</style>