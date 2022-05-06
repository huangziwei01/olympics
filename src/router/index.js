import Vue from 'vue'
import VueRouter from 'vue-router'

//1.安装插件
Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Detail = () => import('views/detail/Detail')
const Guailing = () => import('views/athletes/Guailing')
const Wudajing = () => import('views/athletes/Wudajing')
const Suyiming = () => import('views/athletes/Suyiming')
const Renziwei = () => import('views/athletes/Renziwei')
const Together = () => import('views/stories/Together')
const Future = () => import('views/stories/Future')
const Love = () => import('views/stories/Love')


const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/detail',
    component: Detail,
    children: [
      {
        path:'guailing',
        component: Guailing
      },
      {
        path:'wudajing',
        component: Wudajing
      },
      {
        path:'suyiming',
        component: Suyiming
      },
      {
        path:'renziwei',
        component: Renziwei
      },
      {
        path:'together',
        component: Together
      },
      {
        path:'love',
        component: Love
      },
      {
        path:'future',
        component: Future
      },
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router