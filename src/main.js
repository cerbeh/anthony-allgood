import Vue from 'vue';
import VueRouter from 'vue-router';
import VueCarousel from 'vue-carousel';
import App from './App.vue';



Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueCarousel);


import Home from './components/Home';
import LoginCard from './components/auth/LoginCard';

import AboutListCard from './components/about/AboutList';

import GalleryShowCard from './components/gallery/GalleryShowCard';

import WorkingCreditsShowCard from './components/workingcredits/WorkingCreditsShowCard';
import WorkingCreditsIndex from './components/workingcredits/WorkingCreditsIndex';

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
    path: '/workingcredits',
    component: WorkingCreditsIndex
  },{
    path: '/workingcredits/:id',
    component: WorkingCreditsShowCard
  },{
    path: '/aboutme',
    component: AboutListCard
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
