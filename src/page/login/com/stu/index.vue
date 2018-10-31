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
        <!--<div class="agreement">-->
            <!--<input type="checkbox" id="agree" v-model="mz_agree">-->
            <!--<label for="agree">我已同意 </label><span @click="mz_show = true">《免责单》</span>-->
        <!--</div>-->

        <div class="common-btn stu-btn" @click="login">登录</div>




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
            mz_agree: true,
            state: false
        }),
        methods: {
            login: async function() {

                if (this.state) {
                    return
                }

                this.state = true
                if (!this.sid || !this.sid) {
                    this.showToast('帐号或密码不能为空')
                    this.state = false
                    return
                }

                if (!this.mz_agree) {
                    this.showToast('需要同意免责单')
                    this.state = false
                    return
                }
                this.showLoading('')
                const params = {
                    'sid': this.sid,
                    'passwd': this.passwd,
                    'identity': '学生'
                }

                const res = await this.fetch(this.API('stu'), {
                    data: params,
                    method: 'post'
                })

                if (res.code < 0) {
                    this.hideLoading('')
                    this.showToast(res.msg)
                    this.state = false
                    return
                }

                this.hideLoading('')
                this.showToast({title: res.msg, status: 'success'})
                this.state = false
                if (this.$route.query.change !== 'change') {
                    this.$router.replace({name: 'mineInfo', query: { type: 'create'}})
                    return
                }
                this.$router.replace('/')

            },
            ...mapMutations([
                'showToast',
                'showLoading',
                'hideLoading'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    @import "style";

</style>