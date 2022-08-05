import { createRouter, createWebHistory } from 'vue-router'
import CharacterIndexView from '@/views/character/CharacterIndexView'
import ErrorView from '@/views/error/ErrorView'
import PkIndexView from '@/views/pk/PkIndexView'
import RanklistIndexView from '@/views/ranklist/RanklistIndexView'
import RecordIndexView from '@/views/record/RecordIndexView'

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/pk/"
  },
  {
    path: "/pk/",
    name: "pk_index",
    component: PkIndexView
  },
  {
    path: "/ranklist/",
    name: "ranklist_index",
    component: RanklistIndexView
  },
  {
    path: "/record/",
    name: "record_index",
    component: RecordIndexView
  },
  {
    path: "/character/",
    name: "character_index",
    component: CharacterIndexView
  },
  {
    path: "/404/",
    name: "404",
    component: ErrorView
  },
  {
    path: "/:catchall(.*)",
    redirect: "/404/"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
