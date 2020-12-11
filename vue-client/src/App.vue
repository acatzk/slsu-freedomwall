<template>
  <v-app class="h-screen w-full">
    <nav-bar v-if="loggedIn"/>
      <router-view class="bg-gray-100" />
    <foot-bar />
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    components: {
      NavBar: () => import('@/components/layouts/NavBar'),
      FootBar: () => import('@/components/layouts/FootBar')
    },
    computed: {
      ...mapGetters('user', {
        loggedIn: 'loggedIn'
      })
    }
  }
</script>

<style lang="scss" src="@/assets/app.scss"></style>