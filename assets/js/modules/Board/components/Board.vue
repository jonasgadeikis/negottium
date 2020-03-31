<template>
    <div class="Board" @click.prevent="click">
        <span>{{ name }}</span>
        <span class="material-icons Board-iconColor">send</span>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
            },
        },

        methods: {
            click() {
                this.$emit('click');
            },
        },
    }
</script>

<style scoped lang="scss">
    @import '../../../../css/colors.scss';

    .Board {
        padding: 20px;
        color: $color-title;
        font-size: 18px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        &:hover {
            z-index: 30000;
        }

        &-iconColor {
            color: $color-primary;
        }
    }
</style>
