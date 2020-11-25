<template>
  <div class="home">
    <v-container>
      <nav-bar />
      <v-main>
        
      </v-main>
    </v-container>
  </div>
</template>

<script>
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