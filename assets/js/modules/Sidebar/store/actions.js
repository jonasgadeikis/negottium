import { SIDEBAR_MUTATIONS } from './mutations';

export const SIDEBAR_ACTIONS = {
    TOGGLE_MENU: 'TOGGLE_MENU',
};

export default {
    [SIDEBAR_ACTIONS.TOGGLE_MENU]: ({commit}) => {
        commit(SIDEBAR_MUTATIONS.SET_MENU_STATE);
    },
};
