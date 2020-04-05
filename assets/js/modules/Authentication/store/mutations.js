import { AUTH_STATE } from '../constants';
import { AUTH_MUTATIONS } from '../constants';

export default {
    [AUTH_MUTATIONS.SET_LOGGED_IN]: (state, payload) => {
        state[AUTH_STATE.LOGGED_IN] = payload;
    },

    [AUTH_MUTATIONS.SET_LOADING_STATE]: (state) => {
        state[AUTH_STATE.LOADING] = !state[AUTH_STATE.LOADING];
    },
};
