import {BOARD_STATE} from './state';

export const BOARD_GETTERS = {
    GET_BOARDS: 'GET_BOARDS',
    GET_ACTIVE_BOARD: 'GET_ACTIVE_BOARD',
    GET_TO_DO_TASKS: 'GET_TO_DO_TASKS',
    GET_IN_PROGRESS_TASKS: 'GET_IN_PROGRESS_TASKS',
    GET_COMPLETED_TASKS: 'GET_COMPLETED_TASKS',
    GET_DRAGGED_TASK: 'GET_DRAGGED_TASK',
    GET_COLUMNS: 'GET_COLUMNS',
};

export default {
    [BOARD_GETTERS.GET_BOARDS]: (state) => {
        return state[BOARD_STATE.BOARDS];
    },

    [BOARD_GETTERS.GET_ACTIVE_BOARD]: (state) => {
        return state[BOARD_STATE.ACTIVE_BOARD];
    },

    [BOARD_GETTERS.GET_TO_DO_TASKS]: (state) => {
        return state[BOARD_STATE.ACTIVE_BOARD].tasks.filter(task => {
            return !task.isInProgress && !task.isCompleted;
        });
    },

    [BOARD_GETTERS.GET_IN_PROGRESS_TASKS]: (state) => {
        return state[BOARD_STATE.ACTIVE_BOARD].tasks.filter(task => {
            return task.isInProgress;
        });
    },

    [BOARD_GETTERS.GET_COMPLETED_TASKS]: (state) => {
        return state[BOARD_STATE.ACTIVE_BOARD].tasks.filter(task => {
            return task.isCompleted;
        });
    },

    [BOARD_GETTERS.GET_DRAGGED_TASK]: (state) => {
        return state[BOARD_STATE.DRAGGED_TASK];
    },

    [BOARD_GETTERS.GET_COLUMNS]: (state) => {
        return state[BOARD_STATE.COLUMNS];
    },
};
