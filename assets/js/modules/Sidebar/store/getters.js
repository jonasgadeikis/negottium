import { SIDEBAR_GETTERS } from '../constants';
import { SIDEBAR_STATE } from '../constants';

export default {
    [SIDEBAR_GETTERS.GET_MENU_STATE]: (state) => {
        return state[SIDEBAR_STATE.MENU_STATE];
    },
};
