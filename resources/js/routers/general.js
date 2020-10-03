export default [
  {
    path: '/',
    name: 'top',
    component: () => import(
      /* webpackChunkName: "js/page-top" */
      '../Pages/Top.vue'
    ),
  },
  {
    path: '/post/new',
    name: 'postNew',
    component: () => import(
      /* webpackChunkName: "js/page-post" */
      '../Pages/post.vue'
    ),
  },
]