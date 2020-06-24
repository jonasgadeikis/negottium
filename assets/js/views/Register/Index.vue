<template>
    <div class="RegisterPage">
        <Register />

        <Snackbar />

        <Button red floating right @click="">
            <span class="material-icons">keyboard_backspace</span>
        </Button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import {
        namespace as AUTH_NAMESPACE,
        AUTH_GETTERS,
    } from '../../modules/Authentication/constants';
    import Button from '../../components/Button';
    import Register from '../../modules/Authentication/components/Register';
    import Snackbar from '../../modules/Snackbar/components/Snackbar';

    export default {
        computed: {
            ...mapGetters({
                'GET_MESSAGES': `${AUTH_NAMESPACE}/${AUTH_GETTERS.GET_MESSAGES}`,
            })
        },

        components: {
            Button,
            Register,
            Snackbar,
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
