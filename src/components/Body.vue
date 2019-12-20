<template>
  <div class="body">
    <main>
      <div class="columns medium-3" v-for="result in results" :key="result">
        <div class="card">
          <div class="card-divider">
            {{ result.title }}
          </div>
          <div class="card-section">
            {{ result.abstract }}
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  mounted() {
    this.axios();
  },
  methods: {
    ...mapActions(['axios']),
  },
  computed: {
    ...mapState(['results']),
  },
};
</script>



