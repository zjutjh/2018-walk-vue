<template>
    <div class="test-container">
        <message :title="'申请队伍'" :show="true">
            <h1>队伍信息</h1>
            <p>名称 <span>sdgdfg</span> </p>
            <p>简介 <span>sdfg</span></p>
            <p>人数 <span>sdfgdsfg</span></p>

            <div class="btn-content">
                <div class="btn success">申请</div>
            </div>

        </message>
    </div>
</template>

<script>
    import Test from '../components/head'
    import Message from '../components/message'

    export default {
        name: "index",
        components: {
            Message
        }
    }
</script>

<style scoped>
    .btn-wh-font {
        margin: 0 auto;
        margin-top: 10rem;
        height: 4.6rem;
        width: 20.6rem;
        font-size: 2rem;
        line-height: 4.6rem;
    }

    .test-container {
        width: 100%;
        height: 50rem;
        background-image: linear-gradient(0deg, #FF3F00 0%, rgba(249,68,17,0.73) 0%, #E65144 100%);
    }



</style>