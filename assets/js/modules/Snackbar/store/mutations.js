import { SNACKBAR_MUTATIONS } from '../constants';
import { SNACKBAR_STATE } from '../constants';

export default {
    [SNACKBAR_MUTATIONS.SET_MESSAGES]: (state, payload) => {
        state[SNACKBAR_STATE.MESSAGES] = payload;
    },

    [SNACKBAR_MUTATIONS.SET_TIMER]: (state, payload) => {
        state[SNACKBAR_STATE.TIMER] = payload;
    },
};
