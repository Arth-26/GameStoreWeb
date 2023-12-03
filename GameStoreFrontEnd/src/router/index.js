import { createRouter, createWebHistory } from 'vue-router';
import TelaInicial from '@/components/TelaInicial.vue';
import TelaRegister from '@/components/TelaRegister.vue';
import TelaLogin from '@/components/TelaLogin.vue';
import GameList from '@/components/GameList.vue';

import NewGame from '@/components/NewGame.vue';
import UpdateGame from '@/components/UpdateGame.vue'

const routes = [
  {
    path: '/',
    name: 'TelaInicial',
    component: TelaInicial
  },
  {
    path: '/register',
    name: 'TelaRegister',
    component: TelaRegister
  },
  {
    path: '/login',
    name: 'TelaLogin',
    component: TelaLogin
  },
  {
    path: '/games',
    name: 'GameList',
    component: GameList,
  },
  {
    path: '/games/register',
    name: 'NewGame',
    component: NewGame,
  },
  {
    path: '/games/:id',
    name: 'UpdateGame',
    component: UpdateGame
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;