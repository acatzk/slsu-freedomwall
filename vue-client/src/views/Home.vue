<template>
  <div class="home">
    <nav-bar />
    <v-container>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-container>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'home',
    components: {
      NavBar: () => import('@/components/layouts/NavBar')
    }
  }
</script>

<style scoped lang="scss">
  .home {
    min-height: 1000vh;
    background:#f0f2f5;
  }
</style>