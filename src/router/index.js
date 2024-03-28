import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Library from "../views/Library.vue";
import Login from "../views/Login.vue";
import SearchPage from "../views/SearchPage.vue";
import Signup from "../views/Signup.vue";
import Playlist from "../views/Playlist1.vue";
import CreatePlaylist from "../views/CreatePlaylist.vue";

const history = createWebHistory()
const routes = [
    {
      path: "/",
      name: 'Login',
      component: Login
    },
    {
      path: "/Playlist",
      name: 'Playlist',
      component: Playlist
    },
    {
      path: "/Library",
      name: 'Library',
      component: Library
    },
    {
      path: "/Home",
      name: 'Home',
      component: Home
    },
    {
      path: "/SearchPage",
      name: 'SearchPage',
      component: SearchPage
    },
    {
      path: "/Signup",
      name: 'Signup',
      component: Signup
    },
    {
      path: "/CreatePlaylist",
      name: 'CreatePlaylist',
      component: CreatePlaylist
    },
  ];

const router = createRouter({ history, routes })
export default router