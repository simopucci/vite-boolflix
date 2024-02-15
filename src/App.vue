<script>
  import { store } from './store';

  import AppHeader from './components/AppHeader.vue';

  export default {
    data() {
      return {
        store,
      };
    },

    components: { AppHeader },

  };
</script>

<template>
  <AppHeader></AppHeader>
</template>

<style lang="scss">
  @use './styles/general.scss';
</style>
