import TASK_CONSTANTS from '../constants';

export const TASK_STATE = {
    TASK_PRIORITIES: 'TASK_PRIORITIES',
};

export default {
    [TASK_STATE.TASK_PRIORITIES]: [
        {
            name: TASK_CONSTANTS.TASK_PRIORITY.LOW.NAME,
            value: TASK_CONSTANTS.TASK_PRIORITY.LOW.VALUE,
        },
        {
            name: TASK_CONSTANTS.TASK_PRIORITY.MEDIUM.NAME,
            value: TASK_CONSTANTS.TASK_PRIORITY.MEDIUM.VALUE,
        },
        {
            name: TASK_CONSTANTS.TASK_PRIORITY.HIGH.NAME,
            value: TASK_CONSTANTS.TASK_PRIORITY.HIGH.VALUE,
        },
    ],
}
