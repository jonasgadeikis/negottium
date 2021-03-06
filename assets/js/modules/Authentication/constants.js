export const namespace = 'AUTHENTICATION';

export const AUTH_STATE = {
    LOGGED_IN: 'LOGGED_IN',
    LOADING: 'LOADING',
};

export const AUTH_GETTERS = {
    GET_LOADING_STATE: 'GET_LOADING_STATE',
    GET_LOGGED_IN: 'GET_LOGGED_IN',
};

export const AUTH_MUTATIONS = {
    SET_LOGGED_IN: 'SET_LOGGED_IN',
    SET_LOADING_STATE: 'SET_LOADING_STATE',
};

export const AUTH_ACTIONS = {
    LOGIN: 'LOGIN',
    REGISTER: 'REGISTER',
    LOGOUT: 'LOGOUT',
};

export default {
    MIN_PASSWORD_LENGTH: 6,
}
