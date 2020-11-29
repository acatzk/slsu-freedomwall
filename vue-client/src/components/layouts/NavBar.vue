<template>
  <v-container class="nav-bar">
    <v-app-bar flat 
               color="white" 
               app
               clipped-left>

      <v-btn small
             fab
             text
             class="gray--text"
             @click.stop="drawer = !drawer">
        <v-icon class="iconify" data-icon="heroicons-outline:menu-alt-4"></v-icon>
      </v-btn>
      <v-btn small
             @click="$router.push('/search')"
             fab
             text
             class="gray--text">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      <v-toolbar-title class="secondary--text mx-1 d-none d-sm-flex">
        <v-list-item-content>
          <v-list-item-title>Freedom Wall</v-list-item-title>
        </v-list-item-content>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link to="/" class="router-link">
        <v-img src="@/assets/logo.png" width="49"></v-img>
      </router-link>

      <v-spacer></v-spacer>

      
      <friends v-if="loggedIn"/>
      <notifications v-if="loggedIn"/>
      <profile-options v-if="loggedIn"/>

      <v-hover v-slot="{ hover }" v-if="!loggedIn">
        <v-btn depressed
              :outlined="!hover"
               color="primary"
               class="text-capitalize rounded-lg"
               small
               @click="login">
          <v-icon small left>mdi-google</v-icon> Sign In
        </v-btn>
      </v-hover>

    </v-app-bar>
    
    <side-bar :visible="drawer"
              @close="drawer = false">
    </side-bar>
  </v-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'nav-bar',
    components: {
      ProfileOptions: () => import('./headers-content/ProfileOptions'),
      Notifications: () => import('./headers-content/Notifications'),
      Friends: () => import('./headers-content/Friends'),
      SideBar: () => import('./SideBar')
    },
    data () {
      return {
        drawer: true
      }
    },
    computed: {
      ...mapGetters('user', {
        loggedIn: 'loggedIn'
      })
    },
    methods: {
      ...mapActions('user', { login: 'login' })
    }
  }
</script>

<style lang="scss" scoped>
  .nav-bar {
    width: 100%;
  }
  .router-link {
    text-decoration: none;
  }
</style>