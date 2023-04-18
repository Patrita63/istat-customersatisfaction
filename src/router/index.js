import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import SurveyCompleted from '../pages/SurveyCompleted.vue';
import SurveyNotFound from '../pages/SurveyNotFound.vue';
import PageNotFound from '../pages/PageNotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/:surveyId',
    name: 'home',
    component: Home,
    meta: { title: 'Valuta la tua esperienza online', },
  },
  {
    path: '/survey/error',
    name: 'surveyNotFound',
    component: SurveyNotFound,
    meta: { title: 'Errore, questionario non valido', },
  },
  {
    path: '/survey/success',
    name: 'surveyCompleted',
    component: SurveyCompleted,
    meta: { title: 'Grazie per aver lasciato la tua opinione', },
  },
  {
    path: '*',
    component: PageNotFound,
    meta: { title: 'Pagina non trovata', },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

const DEFAULT_TITLE = 'Istat Costumer Satisfaction';
router.afterEach((to) => {
  console.log("to", to);
  Vue.nextTick(() => {
      document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
