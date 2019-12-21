import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// "The New York Times Developer Network"のURL
const NYTBaseUrl = 'https://api.nytimes.com/svc/topstories/v2/';
const ApiKey = 'USiqUqr6LqGR1oAfzxowmaG2CLxd6vxP';

export default new Vuex.Store({
  state: {
    results: [],
  },
  mutations: {
    axios(state, results) {
      state.results = results;
    },
  },
  actions: {
    axios({commit}, section) {
      // URL作成,ヘルパー関数
      function urlCreation(url:any) {
        return NYTBaseUrl + url + '.json?api-key=' + ApiKey;
      }
      // srction,Body.vueの引数(home)
      let url = urlCreation(section);
      let results:any = [];
      axios.get(url)
        .then(response => {results = response.data.results})
        // TODO:commitの書き方→リファクタリング必要？
        .then(() => {commit('axios', results)})
        .catch(error => {console.log(error);});
    },
  },
});
