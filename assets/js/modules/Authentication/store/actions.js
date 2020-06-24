import { AUTH_MUTATIONS } from '../constants';
import { POST, setAuthToken } from '../../../api';
import Cookie from 'js-cookie';
import { AUTH_ACTIONS } from '../constants';
import router from '../../../router';
import { SNACKBAR_MUTATIONS } from '../../Snackbar/constants';
import { namespace as SNACKBAR_NAMESPACE } from '../../Snackbar/constants';

export default {
    [AUTH_ACTIONS.LOGIN]: ({commit}, payload) => {
        commit(AUTH_MUTATIONS.SET_LOADING_STATE);
        setTimeout(() => {
            POST('login', payload).then(response => {
                Cookie.set('token', response.data.token);
                setAuthToken(response.data.token);
                commit(AUTH_MUTATIONS.SET_LOGGED_IN, true);
                router.push('/boards');
            }).catch(error => {
                const messages = [];

                messages.push(error.response.data);
                commit(`${SNACKBAR_NAMESPACE}/${SNACKBAR_MUTATIONS.SET_MESSAGES}`, messages, { root: true });
            }).finally(() => {
                commit(AUTH_MUTATIONS.SET_LOADING_STATE);
            });
        }, 2000);
    },

    [AUTH_ACTIONS.LOGOUT]: ({commit}) => {
        commit(AUTH_MUTATIONS.SET_LOGGED_IN, false);
        Cookie.remove('token');
        router.push('/login');
    },

    [AUTH_ACTIONS.REGISTER]: ({commit, dispatch}, payload) => {
        commit(AUTH_MUTATIONS.SET_LOADING_STATE);
        setTimeout(() => {
            POST('register', payload).then(() => {
                const user = {
                    username: payload.email,
                    password: payload.password,
                };

                dispatch(AUTH_ACTIONS.LOGIN, user);
            }).catch(error => {
                const messages = [];

                messages.push(error.response.data);
                commit(`${SNACKBAR_NAMESPACE}/${SNACKBAR_MUTATIONS.SET_MESSAGES}`, messages, { root: true });
            }).finally(() => {
                commit(AUTH_MUTATIONS.SET_LOADING_STATE);
            });
        }, 2000);
    },
};
