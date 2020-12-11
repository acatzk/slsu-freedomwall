<template>
  <div class="w-full h-screen bg-blue-100 flex justify-center flex-col">
    <div class="flex items-center justify-center flex-col">
      <img class="w-12 h-12 mt-4" src="@/assets/img/logo.png" alt="slsu-logo">
      <h2 class="font-semibold mt-4 text-gray-700 text-2xl">Welcome to SLSU Freedom Wall</h2>
      <v-card flat class="w-80 my-6">
        <v-card-text>
          Log in with one of the following:
        </v-card-text>
        <v-card-actions class="flex flex-col items-center justify-center">
          <v-btn block class="capitalize text-white bg-blue-600 focus:outline-none my-3" text>
            <svg fill="currentColor" 
                  class="w-5 h-5 mr-6 text-white"
                  xmlns:xlink="http://www.w3.org/1999/xlink" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  preserveAspectRatio="xMidYMid meet" x="2378">
              <title xmlns="http://www.w3.org/2000/svg">
                Facebook icon
              </title>
              <path xmlns="http://www.w3.org/2000/svg" 
                    d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z">
              </path>
            </svg>
            <span class="text-white">Facebook</span>
          </v-btn>
          <v-btn text block class="capitalize">
            <svg fill="currentColor" 
                 class="w-5 h-5 mr-6 text-yellow-600"
                 xmlns:xlink="http://www.w3.org/1999/xlink" 
                 xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 24 24" 
                 preserveAspectRatio="xMidYMid meet">
              <path xmlns="http://www.w3.org/2000/svg" 
                    d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
              </path>
            </svg>
            <span>Google</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
  <!-- <div class="flex items-center justify-center flex-col">
    <h1>Login Google Authentication</h1>
    <v-hover v-slot="{ hover }">
      <v-btn depressed
            :outlined="!hover"
              color="secondary"
              class="text-capitalize rounded-lg font-semibold focus:outline-none"
              small
              @click="loginWithGoogle">
        <v-icon small left>mdi-google</v-icon> <span>Sign In</span>
      </v-btn>
    </v-hover>
    <v-hover v-slot="{ hover }">
      <v-btn depressed
            :outlined="!hover"
              color="secondary"
              class="text-capitalize rounded-lg font-semibold focus:outline-none"
              small
              @click="loginWithFacebook">
        <v-icon small left>mdi-facebook</v-icon> <span>Sign In</span>
      </v-btn>
    </v-hover>
  </div> -->
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'login',
    methods: {
      ...mapActions('user', { 
        loginWithGoogle: 'loginWithGoogle',
        loginWithFacebook: 'loginWithFacebook'
      })
    }
  }
</script>