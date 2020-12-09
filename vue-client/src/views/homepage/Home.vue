<template>
  <div class="home">
    <nav-bar />
    <main-bar>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main-bar>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {
      NavBar: () => import('@/components/layouts/NavBar'),
      MainBar: () => import('@/components/layouts/MainBar')
    }
  }
</script>

<style scoped>
  .home {
    background:#f0f2f5;
    height: 1000vh;
  }
</style>