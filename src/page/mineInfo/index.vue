<template>
    <div class="mine-info">
        <yx-head></yx-head>
        <div class="info-form">
            <div class="form">
                <div class="item">
                    <label for="">姓名</label><input type="text" v-model="form.name">
                    <div class="tip">毅行需实名认证，请按照身份证上信息填写名字</div>
                </div>
                <div class="item touch">
                    <label for="" >校区</label>
                    <select class="h" v-model="form.campus">
                        <option value="屏峰">屏峰</option>
                        <option value="朝晖">朝晖</option>
                    </select>
                </div>
                <div class="item">
                    <label for="">手机号</label><input type="text" placeholder="请输入手机号" v-model="form.phone">
                    <div class="tip">手机号用于组员间的联系，请务必填写正确</div>
                </div>
                <div class="item" v-if="isCreate">
                    <label for="">身份证号码</label><input type="text" placeholder="请输入身份证号码" v-model="form.id_card">
                    <div class="tip">身份证号会用于活动开始前的身份验证</div>
                </div>
                <div class="item" v-if="isCreate">
                    <label for="">重复身份证号码</label><input type="text" placeholder="请再次输入身份证号码" v-model="second_id_card">
                </div>
                <div class="item" v-if="isCreate">
                    <label for="">身高</label><input type="text" placeholder="请输入身高 例如：170" v-model="form.height">
                </div>
                <div class="item">
                    <label for="">邮箱</label><input type="text" placeholder="请输入邮箱" v-model="form.email">
                </div>
                <div class="item">
                    <label for="">QQ</label><input type="text" placeholder="选填" v-model="form.qq">
                </div>
                <div class="item">
                    <label for="">微信号</label><input type="text" placeholder="选填" v-model="form.wx_id">
                </div>

                <div class="common-btn save-btn" @click="save">{{ btn }}</div>
            </div>

            <div class="bk"></div>
        </div>
    </div>
    
</template>

<script>
    import YxHead from '../../components/head'
    import { mapMutations, mapState, mapActions } from 'vuex'
    export default {
        name: "index",
        components: {
            YxHead
        },
        created: async function() {
          if (this.$route.query.type !== 'create') {
              this.btn = '保存更新'
              await  this.getMineInfo()
              return
          }
          this.isCreate = true
        },
        data: () => ({
           form: {
               name:'',
               campus: '屏峰',
               phone: '',
               id_card: '',
               height: '',
               email: '',
               qq: '',
               wx_id: ''
           },
            second_id_card:'',
            btn: '保存修改',
            isCreate: false,
            state: false

        }),
        methods: {
            ...mapMutations([
                'showToast',
                'showLoading',
                'hideLoading'

            ]),
            isEmpty: function () {
                if (!this.form.name){
                    this.showToast('姓名不能为空')
                    return false
                }
                if (!this.form.phone) {
                    this.showToast('手机号不能为空')
                    return false
                }

                if (!this.form.email) {
                    this.showToast('邮箱不能为空')
                    return false
                }

                if (!this.isCreate) {
                    return true
                }
                if (!this.form.id_card || !this.second_id_card) {
                    this.showToast('身份证不能为空')
                    return false
                }
                if (!this.form.height) {
                    this.showToast('身高不能为空')
                    return false
                }

                return true
            },
            save: async function () {
                if (this.state) {
                    return
                }

                this.state = true
                if (!this.isEmpty()) {
                    this.state = false
                    return
                }

                if (!this.verify()) {
                    this.state = false
                    return
                }

                if (this.isCreate) {
                    if (this.second_id_card !== this.form.id_card) {
                        show.showToast('身份证号码不一致')
                        this.state = false
                        return
                    }
                }


                this.showLoading('')
                let params = {}

                if (this.isCreate) {
                    params = {...this.form, type: 'create'}
                } else {
                    params = {
                        campus: this.form.campus,
                        name: this.form.name,
                        email: this.form.email,
                        phone: this.form.phone,
                        wx_id: this.form.wx_id,
                        qq: this.form.wx_id,
                        type: 'update'
                    }
                }
                const res = await this.fetch(this.API('detail'), {
                    data: params,
                    method: 'post'
                })
                if (res.code < 0) {
                    this.showToast(res.msg)
                    this.state = false
                    this.hideLoading('')
                    return
                }
                this.hideLoading('')
                this.showToast({title: res.msg, status: 'success'})

                this.state = false

                this.$router.replace('/')

            },
            getMineInfo: async function() {
                const keys = Object.keys(this.form)
                keys.map((item) => {
                    this.form[item] = this.user[item]
                })
            },
            verify:function() {
                if (!/1[0-9]{10}/.test(this.form.phone)) {
                    this.showToast('手机号格式不正确')
                    return false
                }

                if (!this.isCreate) {
                    return true
                }

                if (!/^[0-9]*$/.test(this.form.height)) {
                    this.showToast('身高必须为数字')
                    return false
                }

                if (!/[0-9]{17}([0-9Xx])/.test(this.form.id_card)) {
                    this.showToast('身份证号码格式不正确')
                    return false
                }

                return true
            }
        },
        computed: {
            ...mapState({
                user: (state) => state.auth.userInfo
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import "style";

</style>