<template>
    <div class="BoardsMenu">
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
    import { mapActions, mapGetters } from 'vuex';
    import { namespace as BOARD_NAMESPACE } from '../../modules/Board/store';
    import { BOARD_ACTIONS } from '../../modules/Board/store/actions';
    import { BOARD_GETTERS } from '../../modules/Board/store/getters';
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
                token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODU0ODE3MDUsImV4cCI6MTU4NjA4NjUwNSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiam9uYXMxMjNAdGVzdC5jb20ifQ.N0oqUp5cLrD_OEnSfTbFJXQPDFDzFrG2lGpaGPC3cAqWWvWne_R-30fbBuP1un5FelGiSbqBdvmiFz8VvacHEkofUK6TE5dX4qW4out3XKxOY_5jOt8C4XF3zmmIRJnSyNjV9QCzMdAo7Zhn5ld5ThJXammJgvJrJhAq_hsXZGj5zLlaqMwXCgCpLVtEyy6NQ7kGLZuverSBP93XzvV3XaZNTSnztB0aGFiZpOOrADfhpcoWWPxG1SWdOv2VhNRr1Eu2LN_Eo17lHAeTZ8WXwA7l3gLibB5bVyU0REwMO8h_HVaQ20fiRsFNMDe7Wkn9xdl76OWRdnkYWfPeaz_h7YhwJjQMESxj2Wb7lIvcpw7O_G1Ai-zLtXKvYBTYFcX_YM4mJi8cZ0KyPqcvndGwd_F3Yq4PueSIO6kVJOWrAmbkLxlii7OLXy5t6PnkQUVKhG1-EsjY_o5r87XxEgMxjInzWolXIht99mDWqu2LISV6DtYDXoPqvLBzAgH9BXbia5Vvwb8gDqb_DLPK_uw7anwnnhnZryCaggOB-sloz-RH4GmzGP7o1_-4W_DBfLRVQpc8Ai2bIk3wqjlvnpGmAFsCg2Dv4ocNvva7HgruEONKuuGP69d8zU8otwS0IdHj6AkTsxJJSvWEtM04BgwizqQHFDRHLwyRdJTJixyTPnY',
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
