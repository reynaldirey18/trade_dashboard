const mutations = {
  SET_LOGIN (state, payload) {
    state.userdata = payload
  },
  retrieveToken (state, token) {
    state.token = token
  }
}
export default mutations
