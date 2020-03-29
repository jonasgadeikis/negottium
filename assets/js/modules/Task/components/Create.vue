<template>
    <div class="CreateTask">
        <Title name="Create New Task" />

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
    import Textarea from '../../../components/Textarea';
    import Title from '../../../components/Title';

    export default {
        data() {
            return {
                task: {
                    name: '',
                    description: '',
                    priority: '',
                    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODQ3ODI0MzEsImV4cCI6MTU4NTM4NzIzMSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiam9uYXMxMjNAdGVzdC5jb20ifQ.cYyQo8reQPQ2A4CKXd3m3Nc0zYK4nTnerBjNXE4KfgDgaMpHg9BUya6SyoQy43e2iP_I10JwHgjO2h4NIWl3MaQWDq4VdRKQ_Ei09zNOWF9oH41WYxTgaAVy6KyvGVWwKCGMBWJwaQuLUm_Fv1JVIlkDoeL3jSRVr94UHkrgxcqzmbrwzoBPhgvoKZzRg6TYjj4qr1fqoF8JL5kOhULDRe9bQtemRzWMsQ8o7SqoBP0h_HXtULeef53OpJwezFtaZDQP8_sdqc9MFI0Yr7_Ji3GH08AL88ojJKb6GZwKiNxg4VWkNtTe99OTDaHMWDHdntClzuH4wXQHPOT_OSCPFC0wE_rj6mSLhXxXndFDBEfsTuyPEtObMpGvtJY-LbIbYD7X1wAyXFVw4sOqSFO5w2-xDkEJM5DmU_JFH49fyhqqBO5z-OayCOd8mS1tIbnBc54aypW62UHOqUQ-UKK75ajxbm0Nhi5OkQuX2HYc6baB3OnEEuS5XHWkVNrX4Iaj5OrRr0G6OBl9FYpLBV-1HQWLX4MeKsyQOaKIlG78vWaVxQZq-U_ilhup-SzxiSdfIJ3shaaskYMFbNM4XPWrlSWdR9nP0tjJHUAiWm0E8rRX1vrGg0YevkeWN4FHs1SRkRVfNLy4QRUI9xuL-3KcKRyCgGR5HVJz-C3BDgm9pm8',
                },
            }
        },

        methods: {
            ...mapActions({
                'CREATE_TASK': `${BOARD_NAMESPACE}/${BOARD_ACTIONS.CREATE_TASK}`,
            }),
            closeModal() {
                document.getElementById('modal').style.display = 'none';
            },
            createTask(task, board) {
                const payload = {
                    board: {
                        id: board.id,
                    },
                    ...task,
                };

                this.CREATE_TASK(payload);
            },
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
            Textarea,
            Title,
        },
    }
</script>