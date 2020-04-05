import { AUTH_STATE } from '../constants';
import { AUTH_GETTERS } from '../constants';

export default {
    [AUTH_GETTERS.GET_LOADING_STATE]: (state) => {
        return state[AUTH_STATE.LOADING];
    },

    [AUTH_GETTERS.GET_LOGGED_IN]: (state) => {
        return state[AUTH_STATE.LOGGED_IN];
    },
};
