import Vue from 'vue';
import Vuex from 'vuex';
import Board from '../modules/Board/store';
import { namespace as BOARD_NAMESPACE } from '../modules/Board/store';
import Task from '../modules/Task/store';
import { namespace as TASK_NAMESPACE } from '../modules/Task/store';
import Sidebar from '../modules/Sidebar/store';
import { namespace as SIDEBAR_NAMESPACE } from '../modules/Sidebar/store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        [BOARD_NAMESPACE]: Board,
        [TASK_NAMESPACE]: Task,
        [SIDEBAR_NAMESPACE]: Sidebar,
    },

    state: {
        loading: false,
    },

    getters: {
        loading: state => {
            return state.loading;
        },
    },

    mutations: {
        toggleLoading: state => {
            state.loading = !state.loading;
        },
    },
});
