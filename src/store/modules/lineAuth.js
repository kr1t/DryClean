const auth = {
  namespaced: true,
  state: {
    user: {},
  },
  getters: {
    user: (state) => {
      return state.user
    },
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data
    },
  },
}

export default auth
