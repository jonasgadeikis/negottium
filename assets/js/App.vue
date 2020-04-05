<template>
    <div class="app">
        <Sidebar v-if="GET_LOGGED_IN" />
        <router-view />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import { namespace as AUTH_NAMESPACE } from './modules/Authentication/constants';
    import { AUTH_GETTERS } from './modules/Authentication/constants';
    import Sidebar from './modules/Sidebar/components/Sidebar';

    export default {
        computed: {
            ...mapGetters({
                'GET_LOGGED_IN': `${AUTH_NAMESPACE}/${AUTH_GETTERS.GET_LOGGED_IN}`,
            }),
        },

        components: {
            Sidebar,
        },
    }
</script>
