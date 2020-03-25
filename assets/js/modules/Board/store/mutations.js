import {BOARD_STATE} from './state';

export const BOARD_MUTATIONS = {
    SET_BOARDS: 'SET_BOARDS',
    SET_ACTIVE_BOARD: 'SET_ACTIVE_BOARD',
    SET_DRAGGED_TASK: 'SET_DRAGGED_TASK',
    SET_COLUMNS_COLOR: 'SET_COLUMNS_COLOR',
    SET_TASK_STATUS: 'SET_TASK_STATUS',
    SET_CREATED_BOARD: 'SET_CREATED_BOARD',
};

export default {
    [BOARD_MUTATIONS.SET_BOARDS]: (state, payload) => {
        state[BOARD_STATE.BOARDS] = payload;
    },

    [BOARD_MUTATIONS.SET_ACTIVE_BOARD]: (state, payload) => {
        state[BOARD_STATE.ACTIVE_BOARD] = payload;
    },

    [BOARD_MUTATIONS.SET_DRAGGED_TASK]: (state, payload) => {
        state[BOARD_STATE.DRAGGED_TASK] = payload;
    },

    [BOARD_MUTATIONS.SET_COLUMNS_COLOR]: (state, payload) => {
        state[BOARD_STATE.COLUMNS].forEach(column => {
            document.getElementById(column.name).style.background = payload;
        });
    },

    [BOARD_MUTATIONS.SET_TASK_STATUS]: (state, payload) => {
        const task = state[BOARD_STATE.ACTIVE_BOARD].tasks.find(task => {
            return task.id === payload.id;
        });

        state[BOARD_STATE.ACTIVE_BOARD].tasks.splice(
            state[BOARD_STATE.ACTIVE_BOARD].tasks.indexOf(task), 1, payload
        );
    },

    [BOARD_MUTATIONS.SET_CREATED_BOARD]: (state, payload) => {
        state[BOARD_STATE.BOARDS].push(payload);
    },
};