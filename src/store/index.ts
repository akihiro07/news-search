import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// "The New York Times Developer Network"のURL
const NYTBaseUrl = 'https://api.nytimes.com/svc/topstories/v2/';
const ApiKey = 'USiqUqr6LqGR1oAfzxowmaG2CLxd6vxP';
// "検索機能(search)"のカテゴリ
const SECTIONS = "home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world";

export default new Vuex.Store({
  state: {
    results: [],
    sections: SECTIONS.split(', '),
    // defaultのsection
    section: 'home'
  },
  mutations: {
    axios(state, results) {
      state.results = results;
    },
    changeSection(state, newSection) {
      state.section = newSection;
    },
  },
  actions: {
    axios({commit}, section) {
      // URL作成,ヘルパー関数
      function urlCreation(url:any) {
        return NYTBaseUrl + url + '.json?api-key=' + ApiKey;
      }
      let url = urlCreation(section);
      let results:any = [];
      axios.get(url)
        .then(response => {results = response.data.results})
        // TODO:commitの書き方→リファクタリング必要？
        .then(() => {commit('axios', results)})
        .catch(error => {console.log(error);});
    },
    changeSection({commit}, newSection) {
      commit('changeSection', newSection);
    },
  },
});
