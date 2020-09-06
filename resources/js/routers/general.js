export default [
  {
    path: '/',
    name: 'top',
    component: () => import(
      /* webpackChunkName: "js/page-top" */
      '../Pages/Top.vue'
    ),
  },

]