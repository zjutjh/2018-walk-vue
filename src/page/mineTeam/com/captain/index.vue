<template>
    <div class="captain">
        <div class="team-apply">
            <div class="title">队伍申请</div>
            <div class="content">
                <div class="info">吴彦祖（屏峰，学生）申请加入你的队伍</div>
                <div class="operate">
                    <div class="agree btn">同意</div>
                    <div class="refuse btn">拒绝</div>
                </div>

            </div>
        </div>

        <member-list></member-list>

        <div class="operate">
            <div class="common-btn team-btn">锁定队伍 <div class="tip">锁定队伍可以让队伍不能再报名</div></div>
            <div class="common-btn team-btn">修改队伍信息 <div class="tip">锁定队伍后才能修改队伍信息</div> </div>
            <div class="common-btn team-btn">解散队伍</div>
        </div>



    </div>
</template>

<script>

    import MemberList from '../members'
    export default {
        name: "index",
        components: {
            MemberList
        }
    }
</script>

<style lang="scss" scoped>
    @import "style";

</style>