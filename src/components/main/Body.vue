<template>
  <div class="body">
    <Search/>
    <main>
      <div class="row" v-for="(results, index)  in resultsProcess" :key="index">
        <div class="columns large-3 medium-6" v-for="(result, index) in results" :key="index">
          <div class="card">
            <div class="card-divider">
              {{ result.title }}
            </div>
            <a :href="result.url" target="_blank"><img :src="result.image_url" alt="記事画像"></a>
            <div class="card-section">
              {{ result.abstract }}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Search from '@/components/main/Search.vue';

export default {
  components: {
    Search,
  },
  mounted() {
    // TODO:mapStateでどうにかならない？
    this.axios(this.$store.state.section);
  },
  methods: {
    ...mapActions(['axios']),
  },
  computed: {
    resultsProcess: state => {
      // state.results,変数,代入
      let posts = state.results;
      // mapメソッド,posts,展開(post),findメソッド,postのmultimediaのformat,superJumbo一致
      posts.map(post => {
        let imgObj = post.multimedia.find(media => media.format === "superJumbo");
        // 各postのオブジェクトに'image_url'を付加
        post.image_url = imgObj ? imgObj.url : "http://placehold.it/300x200?text=N/A";
      });

      // TODO:無駄なスペース削除
      let i, j, chunkedArray = [], chunk = 4;
      for (i=0, j=0; i < posts.length; i += chunk, j++) {
        chunkedArray[j] = posts.slice(i,i+chunk);
      }
      return chunkedArray;
    },
    ...mapState(['results', 'section']),
  },
};
</script>



