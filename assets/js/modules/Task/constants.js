export const namespace = 'TASK';

export const TASK_STATE = {
    LOADING: 'LOADING',
};

export const TASK_GETTERS = {
    GET_LOADING_STATE: 'GET_LOADING_STATE',
};

export const TASK_MUTATIONS = {
    SET_LOADING_STATE: 'SET_LOADING_STATE',
};

export const TASK_ACTIONS = {

};

export default {
    TASK_PRIORITY: {
        LOW: {
            NAME: 'Low',
            VALUE: 0,
        },
        MEDIUM: {
            NAME: 'Medium',
            VALUE: 1,
        },
        HIGH: {
            NAME: 'High',
            VALUE: 2,
        },
    },

    TASK_ACTIONS: {
        START: 'start',
        COMPLETE: 'complete',
    },
};
