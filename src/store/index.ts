import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    results: [
      {title: 'the very first post', abstract: 'lorem ipsum some test dimpsum'},
      {title: 'and then there was the second', abstract: 'lorem ipsum some test dimsum'},
      {title: 'third time\'s a charm', abstract: 'lorem ipsum some test dimsum'},
      {title: 'four the last time', abstract: 'lorem ipsum some test dimsum'},
    ],
  },
  mutations: {
    axios(state, hoge) {
    state.results = hoge;
    },
  },
  actions: {
    axios({commit}) {
      axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=USiqUqr6LqGR1oAfzxowmaG2CLxd6vxP")
        .then(response => {this.state.results = response.data.results});
    },
  },
  modules: {
  },
});
