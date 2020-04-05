import { BOARD_ACTIONS } from '../constants';
import { BOARD_MUTATIONS } from '../constants';
import { GET, POST } from '../../../api';
import TASK_CONSTANTS from '../../Task/constants';

export default {
    [BOARD_ACTIONS.FETCH_BOARDS]: ({commit}) => {
        commit(BOARD_MUTATIONS.SET_LOADING_STATE);
        setTimeout(() => {
            GET('board/get').then(response => {
                commit(BOARD_MUTATIONS.SET_BOARDS, response.data);
            }).catch(error => {
                console.log(error.response.data);
            }).finally(() => {
                commit(BOARD_MUTATIONS.SET_LOADING_STATE);
            });
        }, 3000);
    },

    [BOARD_ACTIONS.FETCH_ACTIVE_BOARD]: ({commit}, payload) => {
        commit(BOARD_MUTATIONS.SET_LOADING_STATE);
        setTimeout(() => {
            GET(`board/${payload}`).then(response => {
                commit(BOARD_MUTATIONS.SET_ACTIVE_BOARD, response.data);
            }).catch(error => {
                console.log(error.response.data);
            }).finally(() => {
                commit(BOARD_MUTATIONS.SET_LOADING_STATE);
            });
        }, 3000);
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

    [BOARD_ACTIONS.TOGGLE_MODAL]: ({commit}, payload) => {
        commit(BOARD_MUTATIONS.SET_MODAL_STATE, payload);
    },
};
