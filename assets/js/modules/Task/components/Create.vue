<template>
    <div class="CreateTask">
        <Title page name="Create New Task" />

        <div class="CreateTask-field">
            <Input
                name="Task Name"
                type="text"
                maximum="50"
                show-length
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
                :options="priorities"
                :model.sync="task.priority"
            />
        </div>

        <div class="CreateTask-actions">
            <Button
                form green
                :disabled="isCreateDisabled"
                @click="createTask(task, GET_ACTIVE_BOARD)"
            >
                Create
            </Button>
            <Button form red @click="TOGGLE_MODAL(false)">Cancel</Button>
        </div>

        <Spinner v-show="loading" :active="loading" />
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapMutations } from 'vuex';
    import {
        namespace as BOARD_NAMESPACE,
        BOARD_ACTIONS,
        BOARD_GETTERS, BOARD_MUTATIONS,
    } from '../../Board/constants';
    import Button from '../../../components/Button';
    import Input from '../../../components/Input';
    import Select from '../../../components/Select';
    import Spinner from '../../../components/Spinner';
    import Textarea from '../../../components/Textarea';
    import Title from '../../../components/Title';
    import TASK_CONSTANTS from '../constants';
    import { POST } from '../../../api';

    export default {
        data() {
            return {
                task: {
                    name: '',
                    description: '',
                    priority: '',
                },
                priorities: [
                    {
                        name: TASK_CONSTANTS.TASK_PRIORITY.LOW.NAME,
                        value: TASK_CONSTANTS.TASK_PRIORITY.LOW.VALUE,
                    },
                    {
                        name: TASK_CONSTANTS.TASK_PRIORITY.MEDIUM.NAME,
                        value: TASK_CONSTANTS.TASK_PRIORITY.MEDIUM.VALUE,
                    },
                    {
                        name: TASK_CONSTANTS.TASK_PRIORITY.HIGH.NAME,
                        value: TASK_CONSTANTS.TASK_PRIORITY.HIGH.VALUE,
                    },
                ],
                loading: false,
            }
        },

        methods: {
            ...mapActions({
                'TOGGLE_MODAL': `${BOARD_NAMESPACE}/${BOARD_ACTIONS.TOGGLE_MODAL}`,
            }),

            ...mapMutations({
                'SET_CREATED_TASK': `${BOARD_NAMESPACE}/${BOARD_MUTATIONS.SET_CREATED_TASK}`,
            }),

            createTask(task, board) {
                this.loading = true;

                const payload = {
                    board: {
                        id: board.id,
                    },
                    ...task,
                };

                setTimeout(() => {
                    POST('task/create', payload).then(response => {
                        this.SET_CREATED_TASK(response.data);
                        this.TOGGLE_MODAL(false);
                    }).catch(error => {
                        console.log(error);
                    }).finally(() => {
                        this.loading = false;
                    });
                }, 2000);
            },
        },

        computed: {
            ...mapGetters({
                'GET_ACTIVE_BOARD': `${BOARD_NAMESPACE}/${BOARD_GETTERS.GET_ACTIVE_BOARD}`,
            }),

            isCreateDisabled() {
                return this.task.name === '' || this.task.priority === '';
            },
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
