import { login } from '@/api/login'

export default {
  namespaced: true,
  state: {
    token: null
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    }
  },
  actions: {
    async loginAction({ commit }, loginData) {
      // 接口
      const { data: { data }} = await login(loginData)
      console.log(data)
      commit('SET_TOKEN', data)
    }
  }
}
