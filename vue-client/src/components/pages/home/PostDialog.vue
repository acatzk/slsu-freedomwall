<template>
  <v-dialog v-model="show" scrollable max-width="600px">
    <v-card>
      <v-card-title>Create a post</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 250px;">
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img :src="userPhoto"></v-img>
          </v-list-item-avatar>
          <v-list-item-title class="font-medium text-gray-500">
            {{ fullname }}
          </v-list-item-title>
        </v-list-item>
        <v-textarea
          auto-grow
          solo
          flat
          rows="6"
          v-model="regularPost"
          row-height="15"
          autofocus
          placeholder="What do you want to talk about?"
        ></v-textarea>
      </v-card-text>
      <v-card-actions class="mx-3">
        <v-btn text class="focus:outline-none" fab small>
          <svg fill="currentColor" 
               class="w-6 h-6 text-gray-400"
               xmlns:xlink="http://www.w3.org/1999/xlink" 
               xmlns="http://www.w3.org/2000/svg" 
               viewBox="0 0 20 20" 
               preserveAspectRatio="xMidYMid meet">
            <path xmlns="http://www.w3.org/2000/svg" 
                  fill-rule="evenodd" 
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd">
            </path>
          </svg>
        </v-btn>
        <v-btn text class="focus:outline-none" fab small>
          <svg fill="currentColor" 
               class="w-6 h-6 text-gray-400" 
               xmlns:xlink="http://www.w3.org/1999/xlink" 
               xmlns="http://www.w3.org/2000/svg" 
               viewBox="0 0 20 20" 
               preserveAspectRatio="xMidYMid meet">
            <path xmlns="http://www.w3.org/2000/svg" 
                  d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm12.553 1.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z">
            </path>
          </svg>
        </v-btn>
        <v-spacer></v-spacer>
        <!-- <v-btn class="rounded-pill text-capitalize focus:outline-none bg-blue-500 text-white" depressed>
          Post
        </v-btn> -->
        <button :disable="regularPost === ''" 
                :class="regularPost === '' ? 'bg-gray-500' : ''"
                class="block py-1 px-4 rounded-full focus:outline-none bg-blue-500 text-white focus:bg-blue-700 hover:bg-blue-600">
          Post
        </button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { firebase } from '@/services'
  import { mapGetters } from 'vuex'
  export default {
    name: 'post-dialog',
    props: {
      visible: {
        type: Boolean,
        required: true
      }
    },
    data () {
      return {
        loading: true,
        regularPost: ''
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
      fullname () {
        return this.userProfile.displayName
      },
      userPhoto () {
        const { photoURL } = this.userProfile
        return firebase.auth() 
          ? photoURL 
          : 'https://220images.mrowl.com/default-user-profile-photo.png'
      }
    }
  }
</script>