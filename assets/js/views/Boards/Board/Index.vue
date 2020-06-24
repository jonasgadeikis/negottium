<template>
    <div class="Board-interface">
        <Title page :name="GET_ACTIVE_BOARD.name" />

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
            v-if="!GET_ACTIVE_BOARD.tasks.length && !GET_LOADING_STATE"
            message="This Board has no tasks. Would You like to create one?"
        />

        <Modal :is-open="GET_MODAL_STATE">
            <Create />
        </Modal>

        <Spinner v-show="GET_LOADING_STATE" :active="GET_LOADING_STATE" />

        <Button green floating left @click="TOGGLE_MODAL(true)">
            <span class="material-icons">add</span>
        </Button>

        <Button red floating right @click="goBack">
            <span class="material-icons">keyboard_backspace</span>
        </Button>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import { namespace as BOARD_NAMESPACE } from '../../../modules/Board/constants';
    import { BOARD_ACTIONS } from '../../../modules/Board/constants';
    import { BOARD_GETTERS } from '../../../modules/Board/constants';
    import Button from '../../../components/Button';
    import Column from './Column';
    import Create from '../../../modules/Task/components/Create';
    import Empty from '../Empty';
    import Img from '../../../components/Img';
    import Modal from '../../../components/Modal';
    import Spinner from '../../../components/Spinner';
    import Title from '../../../components/Title';

    export default {
        created() {
            if (this.GET_ACTIVE_BOARD.id !== Number(this.$route.params.id)) {
                this.FETCH_ACTIVE_BOARD(this.$route.params.id);
            }
        },
        data() {
            return {

            }
        },
        methods: {
            ...mapActions({
                'FETCH_ACTIVE_BOARD': `${BOARD_NAMESPACE}/${BOARD_ACTIONS.FETCH_ACTIVE_BOARD}`,
                'RESET_COLUMNS_COLOR': `${BOARD_NAMESPACE}/${BOARD_ACTIONS.RESET_COLUMNS_COLOR}`,
                'TOGGLE_MODAL': `${BOARD_NAMESPACE}/${BOARD_ACTIONS.TOGGLE_MODAL}`,
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
                'GET_LOADING_STATE': `${BOARD_NAMESPACE}/${BOARD_GETTERS.GET_LOADING_STATE}`,
                'GET_MODAL_STATE': `${BOARD_NAMESPACE}/${BOARD_GETTERS.GET_MODAL_STATE}`,
            }),
        },
        components: {
            Button,
            Column,
            Create,
            Empty,
            Img,
            Modal,
            Spinner,
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
