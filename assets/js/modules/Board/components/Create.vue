<template>
    <div class="CreateBoard">
        <Title page name="Create New Board" />

        <Input
            name="Board Name"
            maximum="50"
            :model.sync="board.name"
        />

        <div class="CreateBoard-actions">
            <Button form green @click="CREATE_BOARD(board)">Create</Button>
            <Button form red @click="closeModal">Cancel</Button>
        </div>

<!--        <Spinner active />-->
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import { namespace as BOARD_NAMESPACE } from '../store';
    import { BOARD_ACTIONS } from '../store/actions';
    import Button from '../../../components/Button';
    import Input from '../../../components/Input';
    import Select from '../../../components/Select';
    import Spinner from '../../../components/Spinner';
    import Title from '../../../components/Title';
    import closeModal from '../../../utilities/methods/modal/closeModal';

    export default {
        data() {
            return {
                board: {
                    name: '',
                    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1ODQ3ODI0MzEsImV4cCI6MTU4NTM4NzIzMSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiam9uYXMxMjNAdGVzdC5jb20ifQ.cYyQo8reQPQ2A4CKXd3m3Nc0zYK4nTnerBjNXE4KfgDgaMpHg9BUya6SyoQy43e2iP_I10JwHgjO2h4NIWl3MaQWDq4VdRKQ_Ei09zNOWF9oH41WYxTgaAVy6KyvGVWwKCGMBWJwaQuLUm_Fv1JVIlkDoeL3jSRVr94UHkrgxcqzmbrwzoBPhgvoKZzRg6TYjj4qr1fqoF8JL5kOhULDRe9bQtemRzWMsQ8o7SqoBP0h_HXtULeef53OpJwezFtaZDQP8_sdqc9MFI0Yr7_Ji3GH08AL88ojJKb6GZwKiNxg4VWkNtTe99OTDaHMWDHdntClzuH4wXQHPOT_OSCPFC0wE_rj6mSLhXxXndFDBEfsTuyPEtObMpGvtJY-LbIbYD7X1wAyXFVw4sOqSFO5w2-xDkEJM5DmU_JFH49fyhqqBO5z-OayCOd8mS1tIbnBc54aypW62UHOqUQ-UKK75ajxbm0Nhi5OkQuX2HYc6baB3OnEEuS5XHWkVNrX4Iaj5OrRr0G6OBl9FYpLBV-1HQWLX4MeKsyQOaKIlG78vWaVxQZq-U_ilhup-SzxiSdfIJ3shaaskYMFbNM4XPWrlSWdR9nP0tjJHUAiWm0E8rRX1vrGg0YevkeWN4FHs1SRkRVfNLy4QRUI9xuL-3KcKRyCgGR5HVJz-C3BDgm9pm8',
                },
                state: false,
            }
        },
        methods: {
            ...mapActions({
                'CREATE_BOARD': `${BOARD_NAMESPACE}/${BOARD_ACTIONS.CREATE_BOARD}`,
            }),

            closeModal,
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
