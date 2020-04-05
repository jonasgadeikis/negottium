<template>
    <div class="BoardsMenu">
        <Title page name="My Boards" />

        <Panel v-for="board in GET_BOARDS" :key="board.id">
            <template v-slot:body>
                <Board :name="board.name" @click="openBoard(board)" />
            </template>
        </Panel>

        <Empty
            v-if="!GET_BOARDS.length && !GET_LOADING_STATE"
            message="You don't have a Board yet. Would you like to create one?"
        />

        <Modal :is-open="GET_MODAL_STATE">
            <Create />
        </Modal>

        <Spinner v-show="GET_LOADING_STATE" :active="GET_LOADING_STATE" />

        <Button green floating left @click="TOGGLE_MODAL(true)">
            <span class="material-icons">add</span>
        </Button>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import { namespace as BOARD_NAMESPACE } from '../../modules/Board/constants';
    import { BOARD_ACTIONS } from '../../modules/Board/constants';
    import { BOARD_GETTERS } from '../../modules/Board/constants';
    import Board from '../../modules/Board/components/Board';
    import Button from '../../components/Button';
    import Create from '../../modules/Board/components/Create';
    import Empty from './Empty';
    import Modal from '../../components/Modal';
    import Panel from '../../components/Panel';
    import Spinner from '../../components/Spinner';
    import Title from '../../components/Title';

    export default {
        created() {
            this.FETCH_BOARDS();
        },

        methods: {
            ...mapActions({
                'FETCH_BOARDS': `${BOARD_NAMESPACE}/${BOARD_ACTIONS.FETCH_BOARDS}`,
                'TOGGLE_MODAL': `${BOARD_NAMESPACE}/${BOARD_ACTIONS.TOGGLE_MODAL}`,
            }),
            openBoard(board) {
                this.$router.push(`/board/${board.id}`);
            },
        },

        computed: {
            ...mapGetters({
                'GET_BOARDS': `${BOARD_NAMESPACE}/${BOARD_GETTERS.GET_BOARDS}`,
                'GET_LOADING_STATE': `${BOARD_NAMESPACE}/${BOARD_GETTERS.GET_LOADING_STATE}`,
                'GET_MODAL_STATE': `${BOARD_NAMESPACE}/${BOARD_GETTERS.GET_MODAL_STATE}`,
            }),
        },

        components: {
            Board,
            Button,
            Create,
            Empty,
            Modal,
            Panel,
            Spinner,
            Title,
        },
    }
</script>

<style scoped lang="scss">
    .BoardsMenu {
        @media (min-width: 400px) {
            padding: 0 150px;
        }

        position: relative;
        flex-grow: 1;
    }
</style>
