<template>
  <v-navigation-drawer
    v-model="show"
    app
    clipped
    class="ma-3"
  >
  
    <v-list nav dense>
      <v-list-item link v-if="loggedIn">
        <v-list-item-icon>
          <v-img :src="getUserProfile" max-width="25" class="rounded"/>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-capitalize">
            {{ userProfile.displayName }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link
                   v-for="item in links"
                  :key="item.title"
                  :to="item.to">
        <v-list-item-icon v-if="loggedIn && item.isProtected">
          <v-icon>
            {{ item.icon }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-icon v-else>
          <v-icon v-show="!item.isProtected">
            {{ item.icon }}
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content v-if="loggedIn && item.isProtected">
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-content v-else>
          <v-list-item-title v-show="!item.isProtected">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
  import { firebase } from '@/services'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'side-bar',
    props: {
      visible: {
        type: Boolean,
        required: true
      }
    },
    data () {
      return {
        drawer: true,
        isXs: false,
        links: [
          { title: 'Friends', icon: 'mdi-account-multiple-plus-outline', to: '/friends' },
          { title: 'Events', icon: 'mdi-calendar-check-outline', to: '/events' },
          { title: 'Dark Mode', icon: 'mdi-lightbulb-outline' },
          { title: 'About', icon: 'mdi-information-outline', to: '/about' },
          { title: 'Saved', icon: 'mdi-bookmark-check-outline', to: '/saved', isProtected: true },
          { title: 'Settings', icon: 'mdi-account-key-outline', to: '/settings', isProtected: true },
          { title: 'Logout', icon: 'mdi-logout', to: '/logout', isProtected: true }
        ]
      }
    },
    computed: {
      show: {
        get () {
          return this.visible
        },
        set (value) {
          if (!value) {
            this.$emit('close')
          }
        }
      },
      ...mapGetters('user', { 
        userProfile: 'userProfile',
        loggedIn: 'loggedIn'
      }),
      getUserProfile () {
        const { photoURL } = this.userProfile
        return firebase.auth() 
          ? photoURL 
          : 'https://220images.mrowl.com/default-user-profile-photo.png'
      }
    }
  }
</script>