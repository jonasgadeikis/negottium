<template>
    <div class="RegisterPage">
        <Register />

        <Button red floating right @click="">
            <span class="material-icons">keyboard_backspace</span>
        </Button>
    </div>
</template>

<script>
    import Button from '../../components/Button';
    import Register from '../../modules/Authentication/components/Register';

    export default {
        components: {
            Button,
            Register,
        },
    }
</script>

<style scoped lang="scss">
    .RegisterPage {
        @media (min-width: 400px) {
            width: 50%;
            margin: 0 auto;
        };

        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .RegisterPage > .Panel {
        width: 100%;
    }
</style>
