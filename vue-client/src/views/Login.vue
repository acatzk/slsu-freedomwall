<template>
  <div class="flex items-center justify-center flex-col">
    Login Google Authentication
    <v-hover v-slot="{ hover }">
      <v-btn depressed
            :outlined="!hover"
              color="secondary"
              class="text-capitalize rounded-lg font-semibold focus:outline-none"
              small
              @click="login">
        <v-icon small left>mdi-google</v-icon> <span>Sign In</span>
      </v-btn>
    </v-hover>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'login',
    methods: {
      ...mapActions('user', { 
        login: 'login' 
      })
    }
  }
</script>