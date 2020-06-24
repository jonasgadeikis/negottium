<template>
    <div class="LoginPage">
        <Login />

        <Snackbar />

        <Button red floating right @click="">
            <span class="material-icons">keyboard_backspace</span>
        </Button>
    </div>
</template>

<script>
    import Button from '../../components/Button';
    import Login from '../../modules/Authentication/components/Login';
    import Snackbar from '../../modules/Snackbar/components/Snackbar';

    export default {
        components: {
            Button,
            Login,
            Snackbar,
        },
    }
</script>

<style scoped lang="scss">
    .LoginPage {
        @media (min-width: 400px) {
            width: 50%;
            margin: 0 auto;
        };

        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .LoginPage > .Panel {
        width: 100%;
    }
</style>
