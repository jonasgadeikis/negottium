export const BOARD_STATE = {
    BOARDS: 'BOARDS',
    ACTIVE_BOARD: 'ACTIVE_BOARD',
    DRAGGED_TASK: 'DRAGGED_TASK',
    COLUMNS: 'COLUMNS',
};

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
};