import { SIDEBAR_ACTIONS } from '../constants';
import { SIDEBAR_MUTATIONS } from '../constants';

export default {
    [SIDEBAR_ACTIONS.TOGGLE_MENU]: ({commit}) => {
        commit(SIDEBAR_MUTATIONS.SET_MENU_STATE);
    },
};
