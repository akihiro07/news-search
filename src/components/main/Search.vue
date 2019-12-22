<template>
  <div id="search">
    <section class="callout secondary">
      <h5 class="text-center">Filter by Category</h5>
      <form>
        <div class="row">
          <div class="large-6 columns">
            <select @input="updateSection">
              <option v-for="(section, index) in sections" :key="index" :value="section">{{ section }}</option>
            </select>
          </div>
          <div class="medium-6 columns">
            <a @click="getPosts" class="button expanded">Retrieve</a>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  methods: {
    updateSection(e) {this.changeSection(e.target.value)},
    getPosts() {(this.axios(this.section))},
    ...mapActions(['axios', 'changeSection'])
  },
  computed: {
    ...mapState(['sections', 'section'])
  }
}
</script>
