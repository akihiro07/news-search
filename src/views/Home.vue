<template>
  <div class="home">
    <Header/>
    <Body/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Body from '@/components/Body.vue';

export default {
  name: 'home',
  components: { Header, Body },
};
</script>
