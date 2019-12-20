<template>
  <div class="body">
    <main>
      <div class="columns medium-3" v-for="(result, index) in results" :key="index">
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
  created() {
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



