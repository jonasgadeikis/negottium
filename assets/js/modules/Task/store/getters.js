import { TASK_STATE } from './state';

export const TASK_GETTERS = {
    GET_TASK_PRIORITIES: 'GET_TASK_PRIORITIES',
};

export default {
    [TASK_GETTERS.GET_TASK_PRIORITIES]: (state) => {
        return state[TASK_STATE.TASK_PRIORITIES];
    },
};
