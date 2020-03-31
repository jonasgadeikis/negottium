<template>
    <div
        :id="id"
        class="Column"
        @dragover="allowDrop($event)"
        @drop="drop($event)"
    >
        <div class="Column-title">
            <span>{{ name }}</span>
            <span>{{ tasks.length }}</span>
        </div>
        <Panel v-for="task in tasks" :key="task.id">
            <template v-slot:body>
                <Task :task="task" @dragStarted="dragStarted(task)" />
            </template>
        </Panel>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import {namespace as BOARD_NAMESPACE} from '../../../modules/Board/store';
    import {BOARD_ACTIONS} from '../../../modules/Board/store/actions';
    import {BOARD_GETTERS} from '../../../modules/Board/store/getters';
    import Panel from '../../../components/Panel';
    import Task from '../../../modules/Task/components/Task';

    export default {
        props: {
            id: {
                type: String,
                required: true,
            },
            tasks: {
                type: Array,
                required: true,
            },
            name: {
                type: String,
                required: true,
            }
        },

        data() {
            return {
                token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODQ3ODI0MzEsImV4cCI6MTU4NTM4NzIzMSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiam9uYXMxMjNAdGVzdC5jb20ifQ.cYyQo8reQPQ2A4CKXd3m3Nc0zYK4nTnerBjNXE4KfgDgaMpHg9BUya6SyoQy43e2iP_I10JwHgjO2h4NIWl3MaQWDq4VdRKQ_Ei09zNOWF9oH41WYxTgaAVy6KyvGVWwKCGMBWJwaQuLUm_Fv1JVIlkDoeL3jSRVr94UHkrgxcqzmbrwzoBPhgvoKZzRg6TYjj4qr1fqoF8JL5kOhULDRe9bQtemRzWMsQ8o7SqoBP0h_HXtULeef53OpJwezFtaZDQP8_sdqc9MFI0Yr7_Ji3GH08AL88ojJKb6GZwKiNxg4VWkNtTe99OTDaHMWDHdntClzuH4wXQHPOT_OSCPFC0wE_rj6mSLhXxXndFDBEfsTuyPEtObMpGvtJY-LbIbYD7X1wAyXFVw4sOqSFO5w2-xDkEJM5DmU_JFH49fyhqqBO5z-OayCOd8mS1tIbnBc54aypW62UHOqUQ-UKK75ajxbm0Nhi5OkQuX2HYc6baB3OnEEuS5XHWkVNrX4Iaj5OrRr0G6OBl9FYpLBV-1HQWLX4MeKsyQOaKIlG78vWaVxQZq-U_ilhup-SzxiSdfIJ3shaaskYMFbNM4XPWrlSWdR9nP0tjJHUAiWm0E8rRX1vrGg0YevkeWN4FHs1SRkRVfNLy4QRUI9xuL-3KcKRyCgGR5HVJz-C3BDgm9pm8',
            }
        },

        computed: {
            ...mapGetters({
                'GET_COLUMNS': `${BOARD_NAMESPACE}/${BOARD_GETTERS.GET_COLUMNS}`,
                'GET_DRAGGED_TASK': `${BOARD_NAMESPACE}/${BOARD_GETTERS.GET_DRAGGED_TASK}`,
            })
        },

        methods: {
            ...mapActions({
                'DRAG_TASK': `${BOARD_NAMESPACE}/${BOARD_ACTIONS.DRAG_TASK}`,
                'CHANGE_STATUS': `${BOARD_NAMESPACE}/${BOARD_ACTIONS.CHANGE_STATUS}`,
            }),
            dragStarted(task) {
                const column = this.GET_COLUMNS.find(column => {
                    return column.name === this.id;
                });
                column.available.forEach(column => {
                    document.getElementById(column).style.background = '#1DD1A175';
                });

                const payload = {
                    ...task,
                    token: this.token,
                    start: this.id,
                };

                this.DRAG_TASK(payload);
            },
            allowDrop(e) {
                e.preventDefault();
            },
            drop(e) {
                e.preventDefault();

                this.GET_COLUMNS.forEach(column => {
                    document.getElementById(column.name).style.background = 'white';
                });

                if (this.id === this.GET_DRAGGED_TASK.start || this.GET_DRAGGED_TASK.start === 'completed') {
                    return;
                }

                if (this.id === 'inProgress' || this.id === 'completed') {
                    this.CHANGE_STATUS(this.GET_DRAGGED_TASK);
                }
            },
        },

        components: {
            Panel,
            Task,
        },
    }
</script>

<style scoped lang="scss">
    @import '../../../../css/colors.scss';

    .Column {
        @media (min-width: 400px) {
            max-width: 33.33%;
            flex-basis: 33.33%;
        }

        flex-grow: 1;
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        transition: all 0.3s linear;

        &-title {
            color: $color-columnTitle;
            margin: 10px;
            display: flex;
            justify-content: space-between;
        }
    }
</style>
