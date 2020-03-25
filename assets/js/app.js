import '../css/app.scss';
import Vue from 'vue';
import Vue2TouchEvents from 'vue2-touch-events';
import App from './App';
import router from './router/index';
import store from './store/index';

Vue.use(Vue2TouchEvents);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});