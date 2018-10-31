<template>
    <div class="other-login">
        <img src="../img/wehcat.png" alt="">

        <!--<div class="agreement">-->
            <!--<input type="checkbox" id="agree" v-model="mz_agree">-->
            <!--<label for="agree">我已同意 </label><span @click="mz_show = true">《免责单》</span>-->
        <!--</div>-->

        <div class="common-btn login-btn" @click="login">微信登陆</div>






    </div>
</template>

<script>
    import Message from '../../../../components/message'
    import { mapMutations, mapState, mapActions } from 'vuex'

    export default {
        components: {
            Message
        },
        data: () => ({
            mz_title: '免责单',
            mz_show: false,
            mz_agree: true,
            state: false
        }),
        methods: {
            login: async function() {
                if (this.state) {
                    return
                }
                this.state = true
                if (!this.mz_agree) {
                    this.showToast('需要同意免责单')
                    return
                }

                this.showLoading('')
                const params =　{
                    'identity': this.$route.query.type
                }

                const res = await this.fetch(this.API('other'), {
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