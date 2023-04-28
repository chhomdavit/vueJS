import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomePage.vue";
import About from "@/views/AboutPage.vue"
import Contact from "@/views/ContactPage.vue"
import Sport from "@/views/SportPage.vue"
import News from "@/views/NewsPage.vue"
import ViewCardNew from "@/views/CardNewsDesc.vue"
import ViewCardSport from "@/views/CardSportDesc.vue"
import Register from "@/views/RegisterPage.vue";
import Login from "@/views/LoginPage.vue";
import Dashboard from "@/views/DashboardPage.vue";
import  NotFoundPage from "@/views/NotFoundPage.vue"



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/sport",
    name: "Sport",
    component: Sport,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/viewcardnew/:id",
    name: "viewcardnew",
    component: ViewCardNew,
  },
  {
    path: "/viewcardsport/:id",
    name: "viewcardsport",
    component: ViewCardSport,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: (to) => {
      if(to.name !== 'Login')
      return '/Login'
    }
    
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFoundPage",
    component: NotFoundPage,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  
});

export default router;