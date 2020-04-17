import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedMenu: 0,
    expandOnHover: true,
    miniVariant: true,
    headerColor: '#512DA8FF',
    listColor: 'white',
    showLoader: false,
    menuLists: [
      { icon: 'mdi-home',
        text: 'Home',
        path: '/',
      },
      { icon: 'mdi-login-variant',
        text: 'Login Page',
        path: '/loginPage',
      },
      { icon: 'mdi-account-plus',
        text: 'Signup Page',
        path: '/signupPage',
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
        path: 'bluetooth',
      },
      {
        icon: 'mdi-chart-donut',
        text: 'Data Usage',
        path: 'dataUsage',
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
