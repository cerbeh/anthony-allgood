import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);
import Home from './components/Home';
import AboutIndex from './components/about/index';
import GalleryIndex from './components/gallery/index';
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
    path: '/gallery',
    component: GalleryIndex
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
