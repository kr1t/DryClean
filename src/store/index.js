import Vue from "vue"
import Vuex from "vuex"
import auth from "./modules/auth"
import sounds from "./modules/sounds"
import products from "./modules/products"
import categories from "./modules/categories"
import root from "./modules/root"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    categories,
    sounds,
    products,
    root,
  },
})
