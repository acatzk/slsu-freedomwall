<template>
  <main-bar>
    <main-container>
      <v-card>
        <h1>Saved</h1>
      </v-card>
    </main-container>
  </main-bar>
</template>

<script>
  export default {
    name: 'profile',
    components: {
      MainBar: () => import('@/components/layouts/MainBar'),
      MainContainer: () => import('@/components/layouts/MainContainer')
    }
  }
</script>