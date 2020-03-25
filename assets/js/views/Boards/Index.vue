<template>
    <div>
        <Title name="My Boards" />

        <Panel v-for="board in GET_BOARDS" :key="board.id">
            <template v-slot:body>
                <Board :name="board.name" @click="openBoard(board)" />
            </template>
        </Panel>

        <Empty
            v-if="!GET_BOARDS.length"
            message="You don't have a Board yet. Would you like to create one?"
        />

        <Modal>
            <Create />
        </Modal>

        <Button green floating left @click="openModal">
            <span class="material-icons">add</span>
        </Button>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import {namespace as BOARD_NAMESPACE} from '../../modules/Board/store';
    import {BOARD_ACTIONS} from '../../modules/Board/store/actions';
    import {BOARD_GETTERS} from '../../modules/Board/store/getters';
    import Board from '../../modules/Board/components/Board';
    import Button from '../../components/Button';
    import Create from '../../modules/Board/components/Create';
    import Empty from './Empty';
    import Modal from '../../components/Modal';
    import Panel from '../../components/Panel';
    import Title from '../../components/Title';

    export default {
        mounted() {
            this.FETCH_BOARDS(this.token);
        },

        data() {
            return {
                token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODQ3ODI0MzEsImV4cCI6MTU4NTM4NzIzMSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiam9uYXMxMjNAdGVzdC5jb20ifQ.cYyQo8reQPQ2A4CKXd3m3Nc0zYK4nTnerBjNXE4KfgDgaMpHg9BUya6SyoQy43e2iP_I10JwHgjO2h4NIWl3MaQWDq4VdRKQ_Ei09zNOWF9oH41WYxTgaAVy6KyvGVWwKCGMBWJwaQuLUm_Fv1JVIlkDoeL3jSRVr94UHkrgxcqzmbrwzoBPhgvoKZzRg6TYjj4qr1fqoF8JL5kOhULDRe9bQtemRzWMsQ8o7SqoBP0h_HXtULeef53OpJwezFtaZDQP8_sdqc9MFI0Yr7_Ji3GH08AL88ojJKb6GZwKiNxg4VWkNtTe99OTDaHMWDHdntClzuH4wXQHPOT_OSCPFC0wE_rj6mSLhXxXndFDBEfsTuyPEtObMpGvtJY-LbIbYD7X1wAyXFVw4sOqSFO5w2-xDkEJM5DmU_JFH49fyhqqBO5z-OayCOd8mS1tIbnBc54aypW62UHOqUQ-UKK75ajxbm0Nhi5OkQuX2HYc6baB3OnEEuS5XHWkVNrX4Iaj5OrRr0G6OBl9FYpLBV-1HQWLX4MeKsyQOaKIlG78vWaVxQZq-U_ilhup-SzxiSdfIJ3shaaskYMFbNM4XPWrlSWdR9nP0tjJHUAiWm0E8rRX1vrGg0YevkeWN4FHs1SRkRVfNLy4QRUI9xuL-3KcKRyCgGR5HVJz-C3BDgm9pm8',
            }
        },

        methods: {
            ...mapActions({
                'FETCH_BOARDS': `${BOARD_NAMESPACE}/${BOARD_ACTIONS.FETCH_BOARDS}`,
            }),
            openBoard(board) {
                this.$router.push(`/board/${board.id}`);
            },
            openModal() {
                document.getElementById('modal').style.display = 'block';
            },
        },

        computed: {
            ...mapGetters({
                'GET_BOARDS': `${BOARD_NAMESPACE}/${BOARD_GETTERS.GET_BOARDS}`,
            }),
        },

        components: {
            Board,
            Button,
            Create,
            Empty,
            Modal,
            Panel,
            Title,
        },
    }
</script>