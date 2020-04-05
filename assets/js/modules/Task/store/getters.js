import { TASK_GETTERS } from '../constants';
import { TASK_STATE } from '../constants';

export default {
    [TASK_GETTERS.GET_LOADING_STATE]: (state) => {
        return state[TASK_STATE.LOADING];
    },
};
