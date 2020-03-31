import  { SIDEBAR_STATE } from './state';

export const SIDEBAR_MUTATIONS = {
    SET_MENU_STATE: 'SET_MENU_STATE',
};

export default {
    [SIDEBAR_MUTATIONS.SET_MENU_STATE]: (state) => {
        state[SIDEBAR_STATE.MENU_STATE] = !state[SIDEBAR_STATE.MENU_STATE];
    },
};
