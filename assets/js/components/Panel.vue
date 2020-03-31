<template>
    <div class="Panel">
        <div class="Panel-header">
            <slot name="header"></slot>
        </div>

        <div class="Panel-body">
            <slot name="body"></slot>
        </div>

        <div class="Panel-footer">
            <slot name="footer"></slot>
        </div>

<!--        TODO: Spinner-->
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang="scss">
    @import '../../css/colors.scss';

    .Panel {
        margin: 15px 10px;
        box-shadow: 0 0 10px 0 $color-panelShadow;
        transition: all 0.3s linear;

        &:hover {
            box-shadow: 0 0 10px 0 $color-panelHover;
        }

        &-header {

        }

        &-body {

        }

        &-footer {

        }
    }
</style>
