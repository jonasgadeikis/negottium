import '../css/app.scss';
import Vue from 'vue';
import Vue2TouchEvents from 'vue2-touch-events';
import VueI18n from 'vue-i18n';
import App from './App';
import router from './router/index';
import store from './store/index';
import Cookie from 'js-cookie';
import {
    namespace as AUTH_NAMESPACE,
    AUTH_MUTATIONS,
} from './modules/Authentication/constants';

Vue.use(Vue2TouchEvents);
Vue.use(VueI18n);

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.conditionalRoute)) {
        const token = Cookie.get('token');

        if (!token) {
            next({ path: '/login' });
        } else {
            next();
            store.commit(
                `${AUTH_NAMESPACE}/${AUTH_MUTATIONS.SET_LOGGED_IN}`,
                true,
                { root: true }
            );
        }
    } else {
        next();
    }
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});
