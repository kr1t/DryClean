import Vue from "vue"
import App from "./App.vue"
import * as firebase from "firebase"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import { firestorePlugin } from "vuefire"

Vue.config.productionTip = false

Vue.use(firestorePlugin)

const configOptions = {
  apiKey: "AIzaSyA6rPeqjwM5VitsnU9cdxAQsX9azToW0i0",
  authDomain: "vuefire-c0f73.firebaseapp.com",
  databaseURL: "https://vuefire-c0f73.firebaseio.com",
  projectId: "vuefire-c0f73",
  storageBucket: "vuefire-c0f73.appspot.com",
  messagingSenderId: "417551668035",
  appId: "1:417551668035:web:7c3da2477047ba520a55f6",
}

firebase.initializeApp(configOptions)

let app

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch("auth/fetchUser", user)
  if (!app) {
    new Vue({
      store,
      router,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app")
  }
})
