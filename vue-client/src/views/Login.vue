<template>
  <div class="w-full h-screen bg-lightblue flex justify-center flex-col">
    <div class="flex items-center justify-center flex-col">
      <img class="w-24 h-24 mt-4" src="@/assets/img/logo.png" alt="slsu-logo">
      <h2 class="font-semibold mt-4 text-gray-700 text-2xl">Welcome to SLSU Freedom Wall</h2>
      <v-card flat class="w-96 my-6 py-5 px-3 rounded-full shadow-lg">
        <v-card-text>
          Log in with one of the following:
        </v-card-text>
        <v-card-actions class="flex flex-col items-center justify-center">
          <v-btn block 
                 class="capitalize text-white focus:outline-none my-3 shadow-xl" 
                 color="#3b5998"
                 @click="loginWithFacebook">
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
          <v-btn block 
                 class="capitalize text-white shadow-xl focus:outline-none mr-2" 
                 color="#dd4b39"
                 @click="loginWithGoogle">
            <svg fill="currentColor" 
                 class="w-5 h-5 mr-6 text-white"
                 xmlns:xlink="http://www.w3.org/1999/xlink" 
                 xmlns="http://www.w3.org/2000/svg" 
                 viewBox="0 0 24 24" 
                 preserveAspectRatio="xMidYMid meet">
              <path xmlns="http://www.w3.org/2000/svg" 
                    d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
              </path>
            </svg>
            <span class="text-white">Google</span>
          </v-btn>
          <v-btn block 
                 class="capitalize my-3 text-white shadow-xl focus:outline-none mr-2" 
                 color="#333"
                 @click="loginWithGithub">
            <svg fill="currentColor" 
                  class="w-5 h-5 mr-6 text-white"
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  preserveAspectRatio="xMidYMid meet" 
                  x="3082">
              <title xmlns="http://www.w3.org/2000/svg">GitHub icon</title>
              <path xmlns="http://www.w3.org/2000/svg" 
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
              </path>
            </svg>
            <span class="text-white">Github</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'login',
    methods: {
      ...mapActions('user', { 
        loginWithGoogle: 'loginWithGoogle',
        loginWithFacebook: 'loginWithFacebook',
        loginWithGithub: 'loginWithGithub'
      })
    }
  }
</script>