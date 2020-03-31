<template>
    <h2 :class="[
            {'Title-page': page},
            {'Title-sidebar': sidebar},
        ]"
    >
        {{ name }}
    </h2>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
            },
            page: {
                type: Boolean,
            },
            sidebar: {
                type: Boolean,
            },
        },
    }
</script>

<style scoped lang="scss">
    @import '../../css/colors.scss';

    .Title {
        &-page {
            text-align: center;
            font-size: 25px;
            font-weight: 500;
            color: $color-title;
        }

        &-sidebar {
            margin: 0;
            font-size: 20px;
        }
    }

</style>
