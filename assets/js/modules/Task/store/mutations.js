import { TASK_MUTATIONS } from '../constants';
import { TASK_STATE } from '../constants';

export default {
    [TASK_MUTATIONS.SET_LOADING_STATE]: (state) => {
        state[TASK_STATE.LOADING] = !state[TASK_STATE.LOADING];
    },
};
