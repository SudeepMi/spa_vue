require('./bootstrap');
window.Vue = require('vue');

import App from './views/App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './route';


Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(require('vue-moment'));

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
