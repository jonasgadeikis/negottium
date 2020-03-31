<template>
    <div class="CreateTask">
        <Title page name="Create New Task" />

        <div class="CreateTask-field">
            <Input
                name="Task Name"
                maximum="50"
                :model.sync="task.name"
            />
        </div>

        <div class="CreateTask-field">
            <Textarea
                name="Task Description"
                maximum="1000"
                :model.sync="task.description"
            />
        </div>

        <div class="CreateTask-field">
            <Select
                name="Task Priority"
                :options="GET_TASK_PRIORITIES"
                :model.sync="task.priority"
            />
        </div>

        <div class="CreateTask-actions">
            <Button form green @click="createTask(task, GET_ACTIVE_BOARD)">Create</Button>
            <Button form red @click="closeModal">Cancel</Button>
        </div>

        <Spinner v-show="loading" :active="loading" />
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import { namespace as BOARD_NAMESPACE } from '../../Board/store';
    import { BOARD_ACTIONS } from '../../Board/store/actions';
    import { BOARD_GETTERS } from '../../Board/store/getters';
    import { namespace as TASK_NAMESPACE } from '../store';
    import { TASK_GETTERS } from '../store/getters';
    import Button from '../../../components/Button';
    import Input from '../../../components/Input';
    import Select from '../../../components/Select';
    import Spinner from '../../../components/Spinner';
    import Textarea from '../../../components/Textarea';
    import Title from '../../../components/Title';
    import closeModal from '../../../utilities/methods/modal/closeModal';

    export default {
        data() {
            return {
                task: {
                    name: '',
                    description: '',
                    priority: '',
                    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODU1OTEzNDMsImV4cCI6MTU4NjE5NjE0Mywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiam9uYXMxMjNAdGVzdC5jb20ifQ.NI5wi8FbVwvv04Yc6GX-MLTCgRbGjDZVBe7HSvtqnogan3xLYDkBXKCGliCRZy0ZUSB2OqT4xhwNMf_yvaA_PCBiXki9wd0TcMHwqpzS_e2DgpwTzZxWWNGRNysEUMbC3r3PA8kAViBezZUzI3aFPppkgkBV436I8vgmi8mPykoThKeJ7nhp3eE9Hnk41ySnoq0ZfIDmbf7uKoJ161c7DU2kwGntdl4S0d6fGtBzmuMLYPYcNqJu_C7tnHwI1szmQoWzVrrEnpp3vNLkSFhpRt7piaH8ejbyTcJvkGlw56M2lCQ6kJARHQ1j3zWXL58LqG3Ct6WZyeVI5dtikKjq5BqN6dLKrfGrb12Zw57dI8SWKmpJPJfwzhDdR7aWhVuDcDAJPwIc601K3idBepwtPCwasuPtm4aO8uTEpnzuMBJpcvlaZj5tdbF9haaUCtdyh93TRgXXOPPKJE697-vhY7K2SSbGAHO-Px1syXHhCblTlB6iXlP_ualLQtQ7Rn1yyjrM5kf8hvuVNdM-hKc3rTT1y4NC59kOc6hhtZ6Z_WveQultlml2-DuxEVtSiQ8ulJurP1Sdo_uLJqMjOD_M8H2bQnLMhazUyPFyORTJSmYUuz-8y7QdYvW9zJJ47aSFYyWvdKnoBN0JcmEwY2nNue9yBvUoJZLb5DhhXyWzgJY',
                },
                loading: false,
            }
        },

        methods: {
            ...mapActions({
                'CREATE_TASK': `${BOARD_NAMESPACE}/${BOARD_ACTIONS.CREATE_TASK}`,
            }),

            async createTask(task, board) {
                const payload = {
                    board: {
                        id: board.id,
                    },
                    ...task,
                };
                await new Promise((resolve) => {
                    this.loading = true;
                    setTimeout(() => {
                        this.CREATE_TASK(payload);
                        resolve();
                    }, 2000);
                });
                this.closeModal();
                this.loading = false;
            },

            closeModal,
        },

        computed: {
            ...mapGetters({
                'GET_ACTIVE_BOARD': `${BOARD_NAMESPACE}/${BOARD_GETTERS.GET_ACTIVE_BOARD}`,
                'GET_TASK_PRIORITIES': `${TASK_NAMESPACE}/${TASK_GETTERS.GET_TASK_PRIORITIES}`,
            }),
        },

        components: {
            Button,
            Input,
            Select,
            Spinner,
            Textarea,
            Title,
        },
    }
</script>

<style scoped lang="scss">
    .CreateTask {
        @media (min-width: 400px) {
            width: 70%;
            margin: 0 auto;
        }

        position: relative;
        display: flex;
        flex-direction: column;

        &-field {
            margin: 10px 0;
        }

        &-actions {
            margin-top: 30px;
            display: flex;
            justify-content: space-around;
        }
    }
</style>
