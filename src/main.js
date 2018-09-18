import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);

import Home from './components/Home';
import AboutIndex from './components/about/index';
import LoginCard from './components/auth/LoginCard';

import GalleryShowCard from './components/gallery/GalleryShowCard';

import Contact from './components/common/contact';

const routes = [
  {
    path: '/',
    component: Home
  },{
    path: '/aboutme',
    component: AboutIndex
  },{
    path: '/contact',
    component: Contact
  },{
    path: '/gallery/:id',
    component: GalleryShowCard
  },{
    path: '/login',
    component: LoginCard
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
