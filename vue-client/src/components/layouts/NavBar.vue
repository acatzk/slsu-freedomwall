<template>
  <div class="nav-bar">
    <v-app-bar flat 
               color="white" 
               app>

      <v-btn small
             fab
             text
             class="secondary--text focus:outline-none"
             @click.stop="drawer = !drawer">
        <svg  v-if="drawer === false"
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h8m-8 6h16">
          </path>
        </svg>
        <svg v-else class="w-6 h-6" stroke="currentColor" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio"><path xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </v-btn>
      <v-btn small
             to="/en/search"
             fab
             text
             class="secondary--text focus:outline-none">
          <svg class="w-6 h-6" 
               fill="none" 
               stroke="currentColor" 
               viewBox="0 0 24 24" 
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
            </path>
          </svg>
        </v-btn>
      <v-toolbar-title class="text-gray-600 d-none d-sm-flex">
        <v-list-item-content>
          <router-link :to="{ name: 'home' }">
            <v-list-item-title class="text-lg px-2 font-light hover:text-gray-500" style="font-family: 'Pacifico'">
              Freedom Wall
            </v-list-item-title>
          </router-link>
        </v-list-item-content>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link :to="{ name: 'home' }" class="router-link">
        <v-img src="@/assets/img/logo.png" width="49"></v-img>
      </router-link>

      <v-spacer></v-spacer>

      
      <friends v-if="loggedIn"/>
      <notifications v-if="loggedIn"/>
      <profile-options v-if="loggedIn"/>

      <v-hover v-slot="{ hover }" v-if="!loggedIn">
        <v-btn depressed
              :outlined="!hover"
               color="secondary"
               class="text-capitalize rounded-lg font-semibold focus:outline-none"
               small
               @click="login">
          <v-icon small left>mdi-google</v-icon> Sign In
        </v-btn>
      </v-hover>

    </v-app-bar>
    
    <side-bar :visible="drawer"
              @close="drawer = false">
    </side-bar>
  </div>
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
        drawer: false
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
  .router-link {
    text-decoration: none;
  }
</style>