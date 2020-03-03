
// single pages
import homePage from '../pages/home/Home.vue'
import profile from '../pages/profile/Profile.vue'
import signupPage from '../pages/SignupPage.vue'
import topHeadline from '../pages/home/TopHeadline.vue'
import customNews from '../pages/home/CustomNews.vue'
import newsPage from '../pages/news/NewsPage.vue'
import newsDetailPage from '../pages/news/NewsDetailPage.vue'
import loginPage from '../pages/Login.vue'
import notFoundPage from '../pages/NotFound.vue'

import { routePropResolver } from './util'
import { DOMAIN_TITLE } from '../.env'

export const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/news/top-headline-news',
    component: homePage,
    meta: { title: `${DOMAIN_TITLE} | home` },
    children: [
      {
        path: 'news/top-headline-news',
        name: 'topheadlinenews',
        component: topHeadline
      },
      {
        path: 'news/custom-news',
        name: 'customnews',
        component: customNews
      }
    
    ]
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
    meta: { title: `${DOMAIN_TITLE} | profile` }
  },
  {
    path: '/news',
    name: 'news',
    component: newsPage,
    meta: { title: `${DOMAIN_TITLE} | news` },
    props: routePropResolver
  },
  {
    path: '/news/:newsID',
    name: 'news detail',
    component: newsDetailPage,
    meta: { title: `${DOMAIN_TITLE} | news detail` }
  },
  {
    path: '/login',
    name: 'login',
    component: loginPage,
    meta: { title: `${DOMAIN_TITLE} | login` }
  },
  {
    path: '/signup',
    name: 'signup',
    component: signupPage,
    meta: { title: `${DOMAIN_TITLE} | signup` }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  }
]
