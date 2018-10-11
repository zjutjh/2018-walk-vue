<template>
    <div class="show-container">
        <div class="show-title">距离结束报名还有</div>
        <div class="show-time">{{ day}}天{{hour}}小时{{minute}}分钟</div>
        <div class="foot-nums">
            <div class="item">
                <p class="title">队伍数</p>
                <p class="nums">{{ teamNums }}</p>
            </div>
            <div class="item">
                <p class="title">报名人数</p>
                <p class="nums">{{ userNums}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapGetters, mapActions } from 'vuex'
    export default {
        name: "index.vue",
        mounted: async function () {
            const _this = this
            await this.getIndexInfo(this)
            if (_this.finishTime) {
                const time = setInterval(() => {
                    const tempTime = _this.finishTime - (new Date())
                    if (tempTime < 0) {
                        return
                    }
                    this.day = Math.floor( tempTime/ 1000 / 24 / 60 / 60)
                    this.hour =  Math.floor(tempTime / 1000 / 60 /60 % 24)
                    this.minute = Math.floor(tempTime / 1000 / 60 % 60)
                }, 1000)
                await this.updateTime(time)
            }

        },
        data: () => ({
            day: 0,
            hour: 0,
            minute: 0

        }),
        methods: {
            ...mapMutations([
                'deleteTime',
                'updateTime'
            ]),
            ...mapActions([
                'getIndexInfo'
            ])
        },
        computed: {
            ...mapGetters([
                'time',
                'teamNums',
                'userNums',
                'finishTime'
            ])
        },
        beforeDestroy: function () {
            this.deleteTime()
        }
    }
</script>

<style lang="scss" scoped>
    @import "style";
</style>