import Vue from 'vue';
import Vuex from 'vuex';
import Authentication from '../modules/Authentication/store';
import { namespace as AUTH_NAMESPACE } from '../modules/Authentication/constants';
import Board from '../modules/Board/store';
import { namespace as BOARD_NAMESPACE } from '../modules/Board/constants';
import Sidebar from '../modules/Sidebar/store';
import { namespace as SIDEBAR_NAMESPACE } from '../modules/Sidebar/constants';
import Snackbar from '../modules/Snackbar/store';
import { namespace as SNACKBAR_NAMESPACE } from '../modules/Snackbar/constants';
import Task from '../modules/Task/store';
import { namespace as TASK_NAMESPACE } from '../modules/Task/constants';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        [AUTH_NAMESPACE]: Authentication,
        [BOARD_NAMESPACE]: Board,
        [SIDEBAR_NAMESPACE]: Sidebar,
        [SNACKBAR_NAMESPACE]: Snackbar,
        [TASK_NAMESPACE]: Task,
    },
});
