<template>
    <div class="dis-container">
        <header>
            <div class="head-bk">精弘毅行</div>
        </header>
        <div class="d-content">
            <h1>风险告知与免责声明</h1>
            <h2>【风险告知】</h2>
            <p>1、关注活动期间的天气情况，做好防晒、防雨的准备。
            </p>
            <p>2、一切听从组织的安排，以小组为单位参加活动，安全优先，遵守活动纪律。
            </p>
            <p>3、提前学习如何避免和处理运动损伤，如水泡、抽筋、崴脚等。
            </p>
            <p>4、偏僻路段多人结伴同行，勿落单。</p>
            <p>5、心血管、脑血管、高血压、低血糖、关节炎等有身体健康问题或有突发病史者，不适宜强烈运动。
            </p>
            <h2>【免责声明】
            </h2>
            <p>1、本活动是非商业性的长距离登山徒步自发群体活动，有一定的风险，参加者应根据自身的状况作出是否参加活动的决定，并应对自己的安全负完全责任。未成年人必须经监护人同意并由其监护人陪同参加。
            </p>
            <p>2、活动参与者保证已熟知并同意本次活动的所有行程与活动安排，充分了解毅行活动的潜在风险，愿意独立承担本次活动中可能发生的人身或财产损害；
            </p>
            <p>3、活动参与者在活动过程中将根据自身身体状况，独立判断行动风险以保障自身人身和财产安全，不受任何活动参加者及其他成员的影响，并有权随时中途退出活动；
            </p>
            <p>4、参加活动往返交通途中和活动中如果发生意外事故，组织者会尽能力范围内组织救援，但对于事故造成的身体损害，乃至不可逆转的永久性身体损伤、后遗症等，以及事件伴随的经济损失，活动组织者不承担任何法律和经济责任。
            </p>
            <p>5、一旦报名，即视为参加者（包括代他人报名者，被代报名参加者）已经充分了解并自愿接受本免责条款，本免责条款自动生效。否则，请终止报名参加，已报名的参加者请在活动开始前退出本次活动。
            </p>
            <p>6、本条款同样适用于活动各环节义工人员。
            </p>
        </div>

        <div class="common-btn dis-btn" @click="show = true">同意本声明</div>

        <message :title="'是否同意声明'" @cancel="show = false" :show="show">
            <p>确定你已经阅读该《风险告知与免责声明》并且同意本声明</p>
            <div class="btn-content">
                <div class="btn fail" @click="agree">同意</div>
            </div>
        </message>



        <div class="bk"></div>


    </div>
    
</template>

<script>
    import Message from '../../components/message'
    export default {
        name: "index",
        components: {
            Message
        },
        data: () => ({
            show: false
        }),
        methods: {
            agree: function() {
                this.$router.replace('/login')

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "style";

</style>