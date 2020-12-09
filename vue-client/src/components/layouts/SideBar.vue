<template>
  <v-navigation-drawer
    v-model="show"
    app
    clipped
  >
  
    <v-list nav dense>
      <v-list-item link v-if="loggedIn" :to="`/en/profile/${userProfile.uid}`">
        <v-list-item-avatar>
          <v-img :src="getUserProfile" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-capitalize secondary--text">
            {{ userProfile.displayName }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <template v-for="item in links">
        <v-list-item link
                    :key="item.title"
                    :to="item.to"
                    class="secondary--text">
          <v-list-item-icon v-if="loggedIn && item.isProtected">
            <span v-html="item.icon"></span>
          </v-list-item-icon>
          <v-list-item-icon v-else>
            <span v-show="!item.isProtected" v-html="item.icon"></span>
          </v-list-item-icon>

          <v-list-item-content v-if="loggedIn && item.isProtected">
            <v-list-item-title class="secondary--text">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-content v-else>
            <v-list-item-title v-show="!item.isProtected" class="secondary--text">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

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
          { 
            title: 'News Feeds', 
            icon: '<svg class="w-6 h-6 secondary--text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>', 
            to: '/en/feeds' 
          },
          { 
            title: 'Friends', 
            icon: '<svg class="w-6 h-6 secondary--text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>', 
            to: '/en/friends' 
          },
          { 
            title: 'Events', 
            icon: '<svg class="w-6 h-6 secondary--text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>', 
            to: '/en/events' 
          },
          { 
            title: 'Dark Mode', 
            icon: '<svg class="w-6 h-6 secondary--text" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>' 
          },
          { 
            title: 'About', 
            icon: '<svg class="w-6 h-6 secondary--text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>', 
            to: '/en/about' 
          },
          { 
            title: 'Saved', 
            icon: '<svg class="w-6 h-6 secondary--text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>', 
            to: '/en/saved', 
            isProtected: true 
          },
          { 
            title: 'Settings', 
            icon: '<svg class="w-6 h-6 secondary--text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>', 
            to: '/en/settings', 
            isProtected: true 
          },
          { 
            title: 'Logout', 
            icon: '<svg class="w-6 h-6 secondary--text" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>', 
            to: '/logout', 
            isProtected: true 
          }
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