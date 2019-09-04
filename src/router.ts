import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Calendar from './views/CalendarPage.vue';
import DailyPage from './views/DailyPage.vue';
import TestPage from './views/TestPage.vue';
import SchedulePage from './views/SchedulePage.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/TestPage',
      name: 'TestPage',
      component: TestPage,
    },
    {
      path: '/',
      name: 'DailyPage',
      component: DailyPage,
    },
    {
      path: '/SchedulePage',
      name: 'SchedulePage',
      component: SchedulePage,
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Calendar,
    },
  ],
});
