import { SIDEBAR_MUTATIONS } from '../constants';
import  { SIDEBAR_STATE } from '../constants';

export default {
    [SIDEBAR_MUTATIONS.SET_MENU_STATE]: (state) => {
        state[SIDEBAR_STATE.MENU_STATE] = !state[SIDEBAR_STATE.MENU_STATE];
    },
};
