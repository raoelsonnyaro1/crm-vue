import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)

const users_uri = "http://localhost:5000/api/v1/users";

const state = {
  users: [],
  user: {},
};

const getters = {
  users: (state) => state.users,
};

const mutations = {
  setUsers: (state, users) => (state.users = users),
};

const actions = {
  async fetchUsers({ commit }) {
    const response = await axios.get(users_uri);
    commit("setUsers", response.data);
  },
}

let store = new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
});

global.store = store;

export default store;
