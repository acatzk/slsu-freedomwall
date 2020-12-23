<template>
  <div class="rounded-lg bg-white p-1 fixed w-60 shadow-sm hover:shadow-lg transition" style="position: fixed;">
    <v-list dense nav>
      <v-list-item link :to="{ name: 'profile', params: { id: userProfile.uid  } }">
        <v-list-item-avatar>
          <v-img :src="userProfilePhoto" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text-capitalize secondary--text">
            {{ userProfile.displayName  }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <template v-for="item in links">
        <v-list-item link
                    :key="item.title"
                    :to="item.to"
                      class="secondary--text">
          <v-list-item-icon >
            <span v-html="item.icon"></span>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="secondary--text">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
  import { firebase } from '@/services'
  export default {
    name: 'link-card',
    props: {
      links: {
        type: Array,
        required: true
      },
      userProfile: {
        type: Object,
        required: true
      }
    },
    computed: {
      userProfilePhoto () {
        const { photoURL } = this.userProfile
        return firebase.auth() 
          ? photoURL 
          : 'https://220images.mrowl.com/default-user-profile-photo.png'
      }
    }
  }
</script>