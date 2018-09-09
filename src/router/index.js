import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Profile from '@/components/User/Profile'
import SignUp from '@/components/User/SignUp'
import SignIn from '@/components/User/SignIn'
import CreateMeetup from '@/components/Meetups/CreateMeetup'
import Meetups from '@/components/Meetups/Meetups'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/newmeetup',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '*',
      name: 'Home',
      component: Home
    }
  ]
})
