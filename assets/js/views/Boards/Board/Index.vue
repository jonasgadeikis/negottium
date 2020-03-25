<template>
    <div class="Board-interface">
        <Title :name="GET_ACTIVE_BOARD.name" />

        <div
            v-if="GET_ACTIVE_BOARD.tasks.length"
            class="columns"
            @mouseleave="RESET_COLUMNS_COLOR($event)"
        >
            <Column
                id="toDo"
                name="To Do"
                :tasks="GET_TO_DO_TASKS"
            />

            <Column
                id="inProgress"
                name="In Progress"
                :tasks="GET_IN_PROGRESS_TASKS"
            />

            <Column
                id="completed"
                name="Completed"
                :tasks="GET_COMPLETED_TASKS"
            />
        </div>

        <Empty
            v-if="!GET_ACTIVE_BOARD.tasks.length"
            message="This Board has no tasks. Would You like to create one?"
        />

        <Button green floating left>
            <span class="material-icons">add</span>
        </Button>

        <Button red floating right @click="goBack">
            <span class="material-icons">keyboard_backspace</span>
        </Button>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import {namespace as BOARD_NAMESPACE} from '../../../modules/Board/store';
    import {BOARD_ACTIONS} from '../../../modules/Board/store/actions';
    import {BOARD_GETTERS} from '../../../modules/Board/store/getters';
    import Button from '../../../components/Button';
    import Column from './Column';
    import Empty from '../Empty';
    import Img from '../../../components/Img';
    import Title from '../../../components/Title';

    export default {
        mounted() {
            const payload = {
                id: this.$route.params.id,
                token: this.token,
            };

            this.FETCH_ACTIVE_BOARD(payload);
        },
        data() {
            return {
                token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODQ3ODI0MzEsImV4cCI6MTU4NTM4NzIzMSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiam9uYXMxMjNAdGVzdC5jb20ifQ.cYyQo8reQPQ2A4CKXd3m3Nc0zYK4nTnerBjNXE4KfgDgaMpHg9BUya6SyoQy43e2iP_I10JwHgjO2h4NIWl3MaQWDq4VdRKQ_Ei09zNOWF9oH41WYxTgaAVy6KyvGVWwKCGMBWJwaQuLUm_Fv1JVIlkDoeL3jSRVr94UHkrgxcqzmbrwzoBPhgvoKZzRg6TYjj4qr1fqoF8JL5kOhULDRe9bQtemRzWMsQ8o7SqoBP0h_HXtULeef53OpJwezFtaZDQP8_sdqc9MFI0Yr7_Ji3GH08AL88ojJKb6GZwKiNxg4VWkNtTe99OTDaHMWDHdntClzuH4wXQHPOT_OSCPFC0wE_rj6mSLhXxXndFDBEfsTuyPEtObMpGvtJY-LbIbYD7X1wAyXFVw4sOqSFO5w2-xDkEJM5DmU_JFH49fyhqqBO5z-OayCOd8mS1tIbnBc54aypW62UHOqUQ-UKK75ajxbm0Nhi5OkQuX2HYc6baB3OnEEuS5XHWkVNrX4Iaj5OrRr0G6OBl9FYpLBV-1HQWLX4MeKsyQOaKIlG78vWaVxQZq-U_ilhup-SzxiSdfIJ3shaaskYMFbNM4XPWrlSWdR9nP0tjJHUAiWm0E8rRX1vrGg0YevkeWN4FHs1SRkRVfNLy4QRUI9xuL-3KcKRyCgGR5HVJz-C3BDgm9pm8',
            }
        },
        methods: {
            ...mapActions({
                'FETCH_ACTIVE_BOARD': `${BOARD_NAMESPACE}/${BOARD_ACTIONS.FETCH_ACTIVE_BOARD}`,
                'RESET_COLUMNS_COLOR': `${BOARD_NAMESPACE}/${BOARD_ACTIONS.RESET_COLUMNS_COLOR}`,
            }),
            goBack() {
                this.$router.go(-1);
            },
        },
        computed: {
            ...mapGetters({
                'GET_ACTIVE_BOARD': `${BOARD_NAMESPACE}/${BOARD_GETTERS.GET_ACTIVE_BOARD}`,
                'GET_TO_DO_TASKS': `${BOARD_NAMESPACE}/${BOARD_GETTERS.GET_TO_DO_TASKS}`,
                'GET_IN_PROGRESS_TASKS': `${BOARD_NAMESPACE}/${BOARD_GETTERS.GET_IN_PROGRESS_TASKS}`,
                'GET_COMPLETED_TASKS': `${BOARD_NAMESPACE}/${BOARD_GETTERS.GET_COMPLETED_TASKS}`,
            }),
        },
        components: {
            Button,
            Column,
            Empty,
            Img,
            Title,
        },
    }
</script>

<style scoped lang="scss">
    @import '../../../../css/colors.scss';

    .Board-interface {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        position: relative;

        .columns {
            flex-grow: 1;
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
        }
    }
</style>