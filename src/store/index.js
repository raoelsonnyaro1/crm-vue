import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)

const users_uri = "http://localhost:5000/api/v1/users";
const projects_uri = "http://localhost:5000/api/v1/projects";
const departements_uri = "http://localhost:5000/api/v1/departements";
const clients_uri = "http://localhost:5000/api/v1/clients";

const state = {
  users: [],
  projects: [],
  departements: [],
  clients: [],
};

const getters = {
  users: (state) => state.users,
  projects: (state) => state.projects,
  departements: (state) => state.departements,
  clients: (state) => state.clients,
};

const mutations = {
  setUsers: (state, users) => (state.users = users),
  setProjects: (state, projects) => (state.projects = projects),
  setDepartements: (state, departements) => (state.departements = departements),
  setClients: (state, clients) => (state.clients = clients),
};

const actions = {
  async fetchUsers({ commit }) {
    const response = await axios.get(users_uri);
    commit("setUsers", response.data);
  },
  async fetchProjects({ commit }) {
    const response = await axios.get(projects_uri);
    commit("setProjects", response.data);
  },
  async fetchDepartements({ commit }) {
    const response = await axios.get(departements_uri);
    commit("setDepartements", response.data);
  },
  async fetchClients({ commit }) {
    const response = await axios.get(clients_uri);
    commit("setClients", response.data);
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
