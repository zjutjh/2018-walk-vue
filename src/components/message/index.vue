<template>
    <transition name="fade">
        <div class="message-modal" v-if="show">
            <div class="message-cnt">
                <div class="message-head">
                    <div class="title">{{ title }}</div>
                    <div class="cancel" @click="cancel"></div>
                </div>
                <div class="content">
                    <slot></slot>
                </div>
            </div>
        </div>

    </transition>
</template>

<script>
    export default {
        name: "index",
        props: ['title', 'show'],
        methods: {
            cancel: function() {
                this.$emit('cancel')
            }
        }
    }
</script>

<style lang="scss">
    @import "style";
</style>