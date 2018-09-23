import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);


import Home from './components/Home';
import LoginCard from './components/auth/LoginCard';

import GalleryShowCard from './components/gallery/GalleryShowCard';

import WorkingCreditsShowCard from './components/workingcredits/WorkingCreditsShowCard';

import Contact from './components/common/contact';

const routes = [
  {
    path: '/',
    component: Home
  },{
    path: '/contact',
    component: Contact
  },{
    path: '/gallery/:id',
    component: GalleryShowCard
  },{
    path: '/login',
    component: LoginCard
  },{
    path: '/workingcredits/:id',
    component: WorkingCreditsShowCard
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
