import {BOARD_MUTATIONS} from './mutations';
import { GET, POST } from '../../../api';
import TASK_CONSTANTS from '../../Task/constants';

export const BOARD_ACTIONS = {
    FETCH_BOARDS: 'FETCH_BOARDS',
    FETCH_ACTIVE_BOARD: 'FETCH_ACTIVE_BOARD',
    DRAG_TASK: 'DRAG_TASK',
    RESET_COLUMNS_COLOR: 'RESET_COLUMNS_COLOR',
    CHANGE_STATUS: 'CHANGE_STATUS',
    CREATE_BOARD: 'CREATE_BOARD',
    CREATE_TASK: 'CREATE_TASK',
    TOGGLE_MODAL: 'TOGGLE_MODAL',
};

export default {
    [BOARD_ACTIONS.FETCH_BOARDS]: ({commit}, payload) => {
        GET('board/get', payload).then(response => {
            commit(BOARD_MUTATIONS.SET_BOARDS, response.data);
        }).catch(error => {
            console.log(error.response.data);
        })
    },

    [BOARD_ACTIONS.FETCH_ACTIVE_BOARD]: ({commit}, payload) => {
        GET(`board/${payload.id}`, payload.token).then(response => {
            commit(BOARD_MUTATIONS.SET_ACTIVE_BOARD, response.data);
        }).catch(error => {
            console.log(error.response.data);
        });
    },

    [BOARD_ACTIONS.DRAG_TASK]: ({commit}, payload) => {
        commit(BOARD_MUTATIONS.SET_DRAGGED_TASK, payload);
    },

    [BOARD_ACTIONS.RESET_COLUMNS_COLOR]: ({commit}) => {
        commit(BOARD_MUTATIONS.SET_COLUMNS_COLOR, 'white');
    },

    [BOARD_ACTIONS.CHANGE_STATUS]: ({commit}, payload) => {
        const data = {
            id: payload.id,
        };

        if (!payload.isInProgress && !payload.isCompleted) {
            data['action'] = TASK_CONSTANTS.TASK_ACTIONS.START;
        } else if (payload.isInProgress) {
            data['action'] = TASK_CONSTANTS.TASK_ACTIONS.COMPLETE;
        }

        POST('task/change-status', data, payload.token).then(response => {
            commit(BOARD_MUTATIONS.SET_TASK_STATUS, response.data);
        }).catch(error => {
            console.log(error);
        });
    },

    [BOARD_ACTIONS.CREATE_BOARD]: ({commit}, payload) => {
        const data = {
            name: payload.name,
        };

        POST('board/create', data, payload.token).then(response => {
            commit(BOARD_MUTATIONS.SET_CREATED_BOARD, response.data);
        }).catch(error => {
            console.log(error);
        });
    },

    [BOARD_ACTIONS.CREATE_TASK]: ({commit}, payload) => {
        POST('task/create', payload, payload.token).then(response => {
            commit(BOARD_MUTATIONS.SET_CREATED_TASK, response.data);
        }).catch(error => {
            console.log(error);
        });
    },
};
