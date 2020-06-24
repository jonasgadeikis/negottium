import { SNACKBAR_GETTERS } from '../constants';
import { SNACKBAR_STATE } from '../constants';

export default {
    [SNACKBAR_GETTERS.GET_MESSAGES]: (state) => {
        return state[SNACKBAR_STATE.MESSAGES];
    },

    [SNACKBAR_GETTERS.GET_TIMER]: (state) => {
        return state[SNACKBAR_STATE.TIMER];
    },
};
