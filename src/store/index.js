import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedMenu: 0,
    selectedMenuName: 'Home',
    expandOnHover: true,
    miniVariant: true,
    navigationDrawerColor: 'red',
    userProfile: [
      {
        icon: 'mdi-home',
        text: 'Home',
        path: '/',
      },
      {
        icon: 'mdi-account',
        text: 'My Profile',
        path: 'myProfile',
      },
      {
        icon: 'mdi-view-quilt',
        text: 'Dashboard',
        path: 'dashboard',
      },
      {
        icon: 'mdi-bluetooth',
        text: 'Bluetooth',
        path: 'unauthorized',
      },
      {
        icon: 'mdi-chart-donut',
        text: 'Data Usage',
        path: 'h',
      },
    ]
  },
  getters:{
    
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  }
})
