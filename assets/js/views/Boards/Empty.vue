<template>
    <div class="Empty">
        <img src="../../../images/undraw_no_data_qbuo.svg"  alt>
        <span style="margin: 30px" class="Empty-message">{{ message }}</span>
    </div>
</template>

<script>
    import Button from '../../components/Button';
    export default {
        props: {
            message: {
                type: String,
                required: true,
            },
        },

        components: {
            Button,
        },
    }
</script>

<style scoped lang="scss">
    @import '../../../css/colors.scss';

    .Empty {
        display: flex;
        flex-direction: column;
        align-items: center;

        &-message {
             color: $color-columnTitle;
             text-align: center;
         }

    img {
        height: 300px;
        width: 60%;
    }

    .ml-small {
        margin-left: 10px;
    }
}
</style>