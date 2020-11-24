<template>
  <div class="home">
    <nav-bar />
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
