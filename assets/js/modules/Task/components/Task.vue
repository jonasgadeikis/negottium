<template>
    <div :id="task.id" class="Task" draggable="true" @dragstart="dragStart(task)">
        <div class="Task-header">
            <p
                class="Task-title"
                :class="{ 'Task-complete': task.isCompleted }"
            >
                {{ task.name }}
            </p>
            <span
                class="material-icons Task-icon"
                :class="[
                    task.priority === TASK_CONSTANTS.TASK_PRIORITY.HIGH.VALUE
                        ? 'Task-priority--high'
                        : task.priority === TASK_CONSTANTS.TASK_PRIORITY.MEDIUM.VALUE
                        ? 'Task-priority--medium'
                        : 'Task-priority--low'
                ]"
            >
                {{ task.priority === TASK_CONSTANTS.TASK_PRIORITY.HIGH.VALUE
                    ? 'keyboard_arrow_up'
                    : task.priority === TASK_CONSTANTS.TASK_PRIORITY.MEDIUM.VALUE
                    ? 'remove'
                    : 'keyboard_arrow_down'
                }}
            </span>
        </div>
        <div class="Task-footer Task-action">
            <Button v-show="!task.isCompleted" green @click="CHANGE_STATUS({...task, token})">
                <span class="material-icons">
                    {{ !task.isCompleted && !task.isInProgress ? 'play_arrow' : 'check' }}
                </span>
            </Button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import {namespace as BOARD_NAMESPACE} from '../../Board/store';
    import {BOARD_ACTIONS} from '../../Board/store/actions';
    import TASK_CONSTANTS from '../constants';
    import Button from '../../../components/Button';

    export default {
        props: {
            task: {
                type: Object,
                required: true,
            },
        },

        data() {
            return {
                TASK_CONSTANTS,
                token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODQ3ODI0MzEsImV4cCI6MTU4NTM4NzIzMSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiam9uYXMxMjNAdGVzdC5jb20ifQ.cYyQo8reQPQ2A4CKXd3m3Nc0zYK4nTnerBjNXE4KfgDgaMpHg9BUya6SyoQy43e2iP_I10JwHgjO2h4NIWl3MaQWDq4VdRKQ_Ei09zNOWF9oH41WYxTgaAVy6KyvGVWwKCGMBWJwaQuLUm_Fv1JVIlkDoeL3jSRVr94UHkrgxcqzmbrwzoBPhgvoKZzRg6TYjj4qr1fqoF8JL5kOhULDRe9bQtemRzWMsQ8o7SqoBP0h_HXtULeef53OpJwezFtaZDQP8_sdqc9MFI0Yr7_Ji3GH08AL88ojJKb6GZwKiNxg4VWkNtTe99OTDaHMWDHdntClzuH4wXQHPOT_OSCPFC0wE_rj6mSLhXxXndFDBEfsTuyPEtObMpGvtJY-LbIbYD7X1wAyXFVw4sOqSFO5w2-xDkEJM5DmU_JFH49fyhqqBO5z-OayCOd8mS1tIbnBc54aypW62UHOqUQ-UKK75ajxbm0Nhi5OkQuX2HYc6baB3OnEEuS5XHWkVNrX4Iaj5OrRr0G6OBl9FYpLBV-1HQWLX4MeKsyQOaKIlG78vWaVxQZq-U_ilhup-SzxiSdfIJ3shaaskYMFbNM4XPWrlSWdR9nP0tjJHUAiWm0E8rRX1vrGg0YevkeWN4FHs1SRkRVfNLy4QRUI9xuL-3KcKRyCgGR5HVJz-C3BDgm9pm8',
            }
        },

        methods: {
            ...mapActions({
                'CHANGE_STATUS': `${BOARD_NAMESPACE}/${BOARD_ACTIONS.CHANGE_STATUS}`,
            }),
            dragStart(task) {
                this.$emit('dragStarted', task);
            },
        },

        components: {
            Button,
        },
    }
</script>