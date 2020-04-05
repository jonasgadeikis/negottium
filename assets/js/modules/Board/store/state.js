import { BOARD_STATE } from '../constants';

export default {
    [BOARD_STATE.BOARDS]: [],
    [BOARD_STATE.ACTIVE_BOARD]: {
        id: '',
        name: '',
        tasks: [],
    },
    [BOARD_STATE.DRAGGED_TASK]: null,
    [BOARD_STATE.COLUMNS]: [
        {
            name: 'toDo',
            available: [
                'inProgress',
            ],
        },
        {
            name: 'inProgress',
            available: [
                'completed',
            ],
        },
        {
            name: 'completed',
            available: [
                // 'toDo',
            ],
        },
    ],
    [BOARD_STATE.LOADING]: false,
    [BOARD_STATE.MODAL_STATE]: false,
};
