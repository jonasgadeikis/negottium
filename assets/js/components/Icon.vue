<template>
    <span :class="['material-icons', {'Icon--spin': spin}]" >{{ name }}</span>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
            },
            spin: {
                type: Boolean,
            },
        },
    }
</script>

<style scoped lang="scss">
    @import '../../css/animations.scss';
    @import '../../css/colors.scss';

    .Icon {

        &--spin {
            color: $color-title;
            animation: spin 2s linear infinite;
        }
    }
</style>
