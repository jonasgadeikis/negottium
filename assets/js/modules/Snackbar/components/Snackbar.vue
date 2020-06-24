<template>
    <div
        class="Snackbar-container"
        :class="{'Snackbar-container--show': GET_MESSAGES.length !== 0}"
    >
        <span
            class="Snackbar-content"
            v-for="message in GET_MESSAGES"
            :key="message.code"
        >
            <span>{{ message.message }}</span>
        </span>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';
    import {
        namespace as SNACKBAR_NAMESPACE,
        SNACKBAR_GETTERS,
        SNACKBAR_MUTATIONS,
    } from '../constants';

    export default {
        computed: {
            ...mapGetters({
                'GET_MESSAGES': `${SNACKBAR_NAMESPACE}/${SNACKBAR_GETTERS.GET_MESSAGES}`,
                'GET_TIMER': `${SNACKBAR_NAMESPACE}/${SNACKBAR_GETTERS.GET_TIMER}`,
            }),
        },

        methods: {
            ...mapMutations({
                'SET_MESSAGES': `${SNACKBAR_NAMESPACE}/${SNACKBAR_MUTATIONS.SET_MESSAGES}`,
                'SET_TIMER': `${SNACKBAR_NAMESPACE}/${SNACKBAR_MUTATIONS.SET_TIMER}`,
            }),
        },

        watch: {
            GET_MESSAGES() {
                let timer;

                window.clearTimeout(this.GET_TIMER);

                if (this.GET_MESSAGES.length) {
                    timer = setTimeout(() => {
                        this.SET_MESSAGES([]);
                    }, 5000);

                    this.SET_TIMER(timer);
                }
            },
        },
    }
</script>

<style scoped lang="scss">
    @import '../../../../css/colors';

    .Snackbar {

        &-container {
            color: $color-white;
            position: fixed;
            top: 20px;
            right: 20px;
            display: flex;
            flex-direction: column;
            transition: all 0.3s;
            transform: translateX(120%);

            &--show {
                transform: translateX(0);
            }
        }

        &-content {
            padding: 10px 20px;
            background-color: $color-error;
            margin-bottom: 5px;
            display: flex;
            align-items: center;
        }
    }
</style>
