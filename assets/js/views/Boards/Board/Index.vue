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
            v-if="!GET_ACTIVE_BOARD.tasks.length && !loading"
            message="This Board has no tasks. Would You like to create one?"
        />

        <Modal :is-open="modal">
            <Create @cancel="toggleModal" />
        </Modal>

        <Spinner v-show="loading" :active="loading" />

        <Button green floating left @click="toggleModal">
            <span class="material-icons">add</span>
        </Button>

        <Button red floating right @click="goBack">
            <span class="material-icons">keyboard_backspace</span>
        </Button>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import { namespace as BOARD_NAMESPACE } from '../../../modules/Board/store';
    import { BOARD_ACTIONS } from '../../../modules/Board/store/actions';
    import { BOARD_GETTERS } from '../../../modules/Board/store/getters';
    import Button from '../../../components/Button';
    import Column from './Column';
    import Create from '../../../modules/Task/components/Create';
    import Empty from '../Empty';
    import Img from '../../../components/Img';
    import Modal from '../../../components/Modal';
    import Spinner from '../../../components/Spinner';
    import Title from '../../../components/Title';

    export default {
        async created() {
            await new Promise((resolve) => {
                this.loading = true;
                setTimeout(() => {
                    const payload = {
                        id: this.$route.params.id,
                        token: this.token,
                    };

                    this.FETCH_ACTIVE_BOARD(payload);
                    resolve();
                }, 2000);
            });

            this.loading = false;
        },
        data() {
            return {
                token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODU0ODE3MDUsImV4cCI6MTU4NjA4NjUwNSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiam9uYXMxMjNAdGVzdC5jb20ifQ.N0oqUp5cLrD_OEnSfTbFJXQPDFDzFrG2lGpaGPC3cAqWWvWne_R-30fbBuP1un5FelGiSbqBdvmiFz8VvacHEkofUK6TE5dX4qW4out3XKxOY_5jOt8C4XF3zmmIRJnSyNjV9QCzMdAo7Zhn5ld5ThJXammJgvJrJhAq_hsXZGj5zLlaqMwXCgCpLVtEyy6NQ7kGLZuverSBP93XzvV3XaZNTSnztB0aGFiZpOOrADfhpcoWWPxG1SWdOv2VhNRr1Eu2LN_Eo17lHAeTZ8WXwA7l3gLibB5bVyU0REwMO8h_HVaQ20fiRsFNMDe7Wkn9xdl76OWRdnkYWfPeaz_h7YhwJjQMESxj2Wb7lIvcpw7O_G1Ai-zLtXKvYBTYFcX_YM4mJi8cZ0KyPqcvndGwd_F3Yq4PueSIO6kVJOWrAmbkLxlii7OLXy5t6PnkQUVKhG1-EsjY_o5r87XxEgMxjInzWolXIht99mDWqu2LISV6DtYDXoPqvLBzAgH9BXbia5Vvwb8gDqb_DLPK_uw7anwnnhnZryCaggOB-sloz-RH4GmzGP7o1_-4W_DBfLRVQpc8Ai2bIk3wqjlvnpGmAFsCg2Dv4ocNvva7HgruEONKuuGP69d8zU8otwS0IdHj6AkTsxJJSvWEtM04BgwizqQHFDRHLwyRdJTJixyTPnY',
                modal: false,
                loading: false,
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

            toggleModal() {
                this.modal = !this.modal;
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
