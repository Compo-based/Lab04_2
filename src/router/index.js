import { createRouter, createWebHashHistory } from "vue-router";
import PassengerList from "../views/PassengerList.vue";
import MasterLayout from "../views/InDetail/MasterLayout.vue";
import PassengerDetails from "../views/InDetail/PassengerDetails.vue";
import AirlineDetails from "../views/InDetail/AirlineDetails.vue";
const routes = [
  {
    path: "/",
    name: "AllPassenger",
    component: PassengerList,
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
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
