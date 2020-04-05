<template>
    <Panel>
        <template v-slot:body>
            <div class="Login">
                <Title page name="Negottium" />

                <div class="Login-field">
                    <Input
                        name="Email"
                        type="text"
                        :model.sync="credentials.username"
                    />
                </div>

                <div class="Login-field">
                    <Input
                        name="Password"
                        type="password"
                        :model.sync="credentials.password"
                    />
                </div>

                <div class="Login-action">
                    <Button form green @click="LOGIN(credentials)">
                        Log in
                    </Button>
                </div>
            </div>

            <Spinner :active="GET_LOADING_STATE" v-show="GET_LOADING_STATE" />
        </template>
    </Panel>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import { namespace as AUTH_NAMESPACE } from '../constants';
    import { AUTH_ACTIONS } from '../constants';
    import { AUTH_GETTERS } from '../constants';
    import Button from '../../../components/Button';
    import Input from '../../../components/Input';
    import Panel from '../../../components/Panel';
    import Spinner from '../../../components/Spinner';
    import Title from '../../../components/Title';

    export default {
        data() {
            return {
                credentials: {
                    username: '',
                    password: '',
                },
            }
        },

        methods: {
            ...mapActions({
                'LOGIN': `${AUTH_NAMESPACE}/${AUTH_ACTIONS.LOGIN}`,
            }),
        },

        computed: {
            ...mapGetters({
                'GET_LOADING_STATE': `${AUTH_NAMESPACE}/${AUTH_GETTERS.GET_LOADING_STATE}`,
            }),
        },

        components: {
            Button,
            Input,
            Panel,
            Spinner,
            Title,
        },
    }
</script>

<style scoped lang="scss">
    .Login {
        position: relative;
        padding: 20px 30px;

        &-field {
            margin: 10px 0;
        }

        &-action {
            display: flex;
            justify-content: center;
        }
    }
</style>
