import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAS3pYmSOuGAvgbx9ozP-pK2P7UPt9v7LM",
  authDomain: "fir-auth-7b7f0.firebaseapp.com",
  projectId: "fir-auth-7b7f0",
  storageBucket: "fir-auth-7b7f0.appspot.com",
  messagingSenderId: "191626694399",
  appId: "1:191626694399:web:1ca967bf1e60a5da0506ca",
  measurementId: "G-P8T1SW4NPG"
};

firebase.default.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')