import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);

import Home from './components/Home';
import AboutIndex from './components/about/index';

import HeadshotsGallery from './components/gallery/Headshots';
import ProductionGallery from './components/gallery/Production';
import PersonalGallery from './components/gallery/Personal';
import ShowreelGallery from './components/gallery/Showreel';

import Contact from './components/common/contact';

const routes = [
  {
    path: '/',
    component: Home
  },{
    path: '/about',
    component: AboutIndex
  },{
    path: '/contact',
    component: Contact
  },{
    path: '/gallery/headshots',
    component: HeadshotsGallery
  },{
    path: '/gallery/personal',
    component: PersonalGallery
  },{
    path: '/gallery/production',
    component: ProductionGallery
  },{
    path: '/gallery/showreel',
    component: ShowreelGallery
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
