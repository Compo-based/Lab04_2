import { createRouter, createWebHashHistory } from "vue-router";
import PassengerList from "../views/PassengerList.vue";
import MasterLayout from "../views/InDetail/MasterLayout.vue";
import PassengerDetails from "../views/InDetail/PassengerDetails.vue";
import AirlineDetails from "../views/InDetail/AirlineDetails.vue";
import EditDetails from "../views/InDetail/EditDetails.vue";
import NotFound from '../views/NotFound.vue'
import NetWorkError from '../views/NetworkError.vue'

const routes = [
  {
    path: "/",
    name: "AllPassenger",
    component: PassengerList,
    props: (route) => ({ page: parseInt(route.query.page) || 0, size: parseInt(route.query.size) || 10 })
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: '/passenger/:id',
    name: 'MasterLayout',
    component: MasterLayout,
    props: true,
    children: [
      {
        path: '',
        name: 'PassengerDetails',
        component: PassengerDetails
      },
      {
        path: 'airline',
        name: 'AirlineDetails',
        props: true,
        component: AirlineDetails
      },
      {
        path: 'edit',
        name: 'EditDetails',
        props: true,
        component: EditDetails
      }
    ]
  },
  {
    path: '/204/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetWorkError
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
