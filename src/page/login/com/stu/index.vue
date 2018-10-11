<template>
    <div class="stu-login">
        <div class="form">
            <div class="item">
                <label for="">帐号</label><input v-model="sid" type="text" placeholder="请输入精弘通行证（学号）">
            </div>
            <div class="item">
                <label for="">密码</label><input v-model="passwd" type="password" placeholder="请输入密码">
            </div>


        </div>
        <div class="agreement">
            <input type="checkbox" id="agree" v-model="mz_agree">
            <label for="agree">我已同意 </label><span @click="mz_show = true">《免责单》</span>
        </div>

        <div class="common-btn stu-btn" @click="login">登录</div>

        <message :title="mz_title" :show="mz_show" @cancel="mz_show = false">
            <p>天气渐凉，又到了每年精弘毅行的季节了，</p>
            <p>叶子一片片飞舞而下，</p>
            <p>某一处山脉又将迎来熙熙攘攘的毅行人潮。</p>
            <p>这是一场盛大的相遇，</p>
            <p>也是精弘毅行与人一年一度不约而至的相遇，</p>
            <p>是不可辜负的好时光。</p>

        </message>


    </div>
    
</template>

<script>
    import Message from '../../../../components/message'
    import { mapMutations, mapState, mapActions } from 'vuex'
    export default {
        name: "index",
        components: {
            Message
        },
        data: () => ({
            mz_show: true,
            mz_title: '免责单',
            sid: '',
            passwd: '',
            mz_agree: false
        }),
        methods: {
            login: async function() {
                if (!this.sid || !this.sid) {
                    this.showToast('帐号或密码不能为空')
                    return
                }

                if (!this.mz_agree) {
                    this.showToast('需要同意免责单')
                    return
                }

                const params = {
                    'sid': this.sid,
                    'passwd': this.passwd,
                    'identity': this.$route.query.type
                }

                const res = await this.fetch(this.API('stu'), {
                    data: params,
                    method: 'post'
                })

                if (res.code < 0) {
                    this.showToast(res.msg)
                    return
                }

                this.showToast({title: res.msg, status: 'success'})
                this.$router.replace({name: 'mineInfo', query: { type: 'create'}})
            },
            ...mapMutations([
                'showToast'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    @import "style";

</style>