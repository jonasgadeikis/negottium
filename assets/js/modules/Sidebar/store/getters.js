import { SIDEBAR_STATE } from './state';

export const SIDEBAR_GETTERS = {
    GET_MENU_STATE: 'GET_MENU_STATE',
};

export default {
    [SIDEBAR_GETTERS.GET_MENU_STATE]: (state) => {
        return state[SIDEBAR_STATE.MENU_STATE];
    },
};
