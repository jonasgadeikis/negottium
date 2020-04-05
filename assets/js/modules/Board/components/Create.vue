<template>
    <div class="CreateBoard">
        <Title page name="Create New Board" />

        <Input
            name="Board Name"
            type="text"
            maximum="50"
            :model.sync="board.name"
        />

        <div class="CreateBoard-actions">
            <Button form green @click="createBoard(board)">Create</Button>
            <Button form red @click="TOGGLE_MODAL(false)">Cancel</Button>
        </div>

        <Spinner :active="loading" v-show="loading" />
    </div>
</template>

<script>
    import { mapActions, mapMutations } from 'vuex';
    import {
        namespace as BOARD_NAMESPACE,
        BOARD_ACTIONS,
        BOARD_MUTATIONS,
    } from '../constants';
    import Button from '../../../components/Button';
    import Input from '../../../components/Input';
    import Select from '../../../components/Select';
    import Spinner from '../../../components/Spinner';
    import Title from '../../../components/Title';
    import { POST } from '../../../api';

    export default {
        data() {
            return {
                board: {
                    name: '',
                },
                loading: false,
            }
        },

        methods: {
            ...mapActions({
                'TOGGLE_MODAL': `${BOARD_NAMESPACE}/${BOARD_ACTIONS.TOGGLE_MODAL}`,
            }),

            ...mapMutations({
                'SET_CREATED_BOARD': `${BOARD_NAMESPACE}/${BOARD_MUTATIONS.SET_CREATED_BOARD}`,
            }),

            createBoard(board) {
                this.loading = true;
                setTimeout(() => {
                    POST('board/create', board).then(response => {
                        this.SET_CREATED_BOARD(response.data);
                        this.TOGGLE_MODAL(false);
                    }).catch(error => {
                        console.log(error);
                    }).finally(() => {
                        this.loading = false;
                    });
                }, 2000);
            }
        },

        components: {
            Button,
            Input,
            Select,
            Spinner,
            Title,
        },
    }
</script>

<style scoped lang="scss">
    .CreateBoard {
        @media (min-width: 400px) {
            width: 70%;
            margin: 0 auto;
        }

        position: relative;
        display: flex;
        flex-direction: column;

        &-actions {
            margin-top: 30px;
            display: flex;
            justify-content: space-around;
        }
    }
</style>
