<template>
    <div class="Spinner">
        <Icon name="settings" :spin="active" />
    </div>
</template>

<script>
    import Icon from './Icon';

    export default {
        props: {
            active: {
                type: Boolean,
            },
        },

        components: {
            Icon,
        },
    }
</script>

<style scoped lang="scss">
    @import '../../css/colors.scss';

    .Spinner {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $color-loading;
        z-index: 100000;
    }
</style>
