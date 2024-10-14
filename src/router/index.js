import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductsComponents from '../views/ProductsComponents.vue';

const routes = [
  { path: '/home', component: HomePage },
  { path: '/products', component: ProductsComponents },
  { path: '*', redirect: '/home' } // Redirect to home if route not found
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
