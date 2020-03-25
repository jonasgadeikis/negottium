import Vue from 'vue';
import Vuex from 'vuex';
import Board from '../modules/Board/store/index';
import {namespace as BOARD_NAMESPACE} from '../modules/Board/store/index';
import Task from '../modules/Task/store/index';
import {namespace as TASK_NAMESPACE} from '../modules/Task/store/index';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        [BOARD_NAMESPACE]: Board,
        [TASK_NAMESPACE]: Task,
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