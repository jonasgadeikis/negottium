<template>
    <div
        :class="[
            'Modal',
            {'Modal-closed': !isOpen},
            {'Modal-open': isOpen},
        ]"
    >
        <div class="Modal-content" :class="">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isOpen: {
                type: Boolean,
            },
        },
    }
</script>

<style scoped lang="scss">
    @import '../../css/colors.scss';

    .Modal {
        display: block;
        position: fixed;
        z-index: 20000;
        padding-top: 100px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: $color-modalShadow;
        transition: all 0.3s;

        &-closed {
            opacity: 0;
            pointer-events: none;
        }

        &-open {
            opacity: 1;
            pointer-events: auto;
        }

        &-content {
            background-color: $color-white;
            margin: auto;
            padding: 20px;
            width: 80%;
        }
    }
</style>
