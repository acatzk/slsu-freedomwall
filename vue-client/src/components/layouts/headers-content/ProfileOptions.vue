<template>
  <v-menu offset-y transition="slide-x-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn small
             fab
             text
             v-bind="attrs"
             v-on="on"
             class="mx-2">
        <v-avatar size="30px" item>
          <v-img src="@/assets/logo.png" aspect-ratio="1">
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
            <v-list-item-title>
                <v-icon left medium>
                  {{ hover ? `${opt.icon}` : `${opt.icon}-outline` }}
                </v-icon> {{ opt.text }}
            </v-list-item-title>
          </v-hover>
        </v-list-item>
        <v-list-item link>
          <v-hover v-slot="{ hover }">
            <v-list-item-title>
                <v-icon left medium>
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
  export default {
    name: 'profile-options',
    data () {
      return {
        profileOptions: [
          { icon: 'mdi-account', text: 'Profile', to: `/profile/1` },
          { icon: 'mdi-account-key', text: 'Settings', to: '/settings' }
        ]
      }
    }
  }
</script>