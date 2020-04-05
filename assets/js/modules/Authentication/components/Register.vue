<template>
    <Panel>
        <template v-slot:body>
            <div class="Register">
                <Title page name="Register" />

                <div class="Register-field">
                    <Input
                        type="text"
                        name="Email"
                        :model.sync="credentials.email"
                    />
                </div>

                <div class="Register-field">
                    <Input
                        type="password"
                        name="Password"
                        :model.sync="credentials.password"
                    />
                </div>

                <div class="Register-field">
                    <Input
                        type="password"
                        name="Repeat Password"
                        :model.sync="credentials.repeatPassword"
                    />
                </div>

                <div class="Register-action">
                    <Button form green @click="register(credentials)">
                        Register
                    </Button>
                </div>
            </div>

            <Spinner :active="GET_LOADING_STATE" v-show="GET_LOADING_STATE" />
        </template>
    </Panel>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import {
        namespace as AUTH_NAMESPACE,
        AUTH_ACTIONS,
        AUTH_GETTERS
    } from '../constants';
    import Button from '../../../components/Button';
    import Input from '../../../components/Input';
    import Panel from '../../../components/Panel';
    import Spinner from '../../../components/Spinner';
    import Title from '../../../components/Title';
    import validateRegister from '../../../utilities/methods/validators/validateRegister';

    export default {
        data() {
            return {
                credentials: {
                    email: '',
                    password: '',
                    repeatPassword: '',
                },
            }
        },

        methods: {
            ...mapActions({
                'REGISTER': `${AUTH_NAMESPACE}/${AUTH_ACTIONS.REGISTER}`,
            }),

            register(credentials) {
                if (validateRegister(credentials)) {
                    this.REGISTER(credentials);
                }
            },
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
    .Register {
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
