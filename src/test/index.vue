<template>
    <div class="test-container">
        <test></test>
    </div>
</template>

<script>
    import Test from '../components/head'

    export default {
        name: "index",
        components: {
            Test
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