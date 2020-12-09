<template>
  <v-menu offset-y transition="slide-y-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn small
             fab
             text
             v-bind="attrs"
             v-on="on"
             class="mx-2 focus:outline-none">
        <v-avatar size="30px" item>
          <v-img :src="getUserProfile" aspect-ratio="1">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0"
                     align="center"
                     justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img> 
        </v-avatar>
      </v-btn>
    </template>
    <v-card
      width="150"
      class="mx-auto"
    >
      <v-list dense>
        <v-list-item v-for="(opt, io) in profileOptions" 
                    :key="io"
                    :to="opt.to">
          <v-hover v-slot="{ hover }">
            <v-list-item-title class="secondary--text">
                <v-icon left medium color="secondary">
                  {{ hover ? `${opt.icon}` : `${opt.icon}-outline` }}
                </v-icon> {{ opt.text }}
            </v-list-item-title>
          </v-hover>
        </v-list-item>
        <v-list-item link @click="logout">
          <v-hover v-slot="{ hover }">
            <v-list-item-title class="secondary--text">
                <v-icon left medium color="secondary">
                  {{ hover ? 'mdi-lock' : 'mdi-lock-open-outline' }}  
                </v-icon> Logout
            </v-list-item-title>
          </v-hover>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
  import { firebase } from '@/services'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'profile-options',
    data () {
      return {
        profileOptions: [
          { icon: 'mdi-account', text: 'Profile', to: `/profile/1` },
          { icon: 'mdi-account-key', text: 'Settings', to: '/settings' }
        ]
      }
    },
    methods: {
      ...mapActions('user', {
        logout: 'logout'
      })
    },
    computed: {
      ...mapGetters('user', {
        userProfile: 'userProfile'
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