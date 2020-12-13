<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-hover v-slot="{ hover }">
        <v-btn depressed
              fab
              text
              small
              v-bind="attrs"
              v-on="on"
              class="secondary--text focus:outline-none d-none d-sm-flex"
              :to="{ name: 'friends' }">
          <svg v-if="!hover"
               class="w-6 h-6" 
               fill="none" 
               stroke="currentColor" 
               viewBox="0 0 24 24" 
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
            </path>
          </svg>
          <svg v-else
               class="w-6 h-6" 
               fill="currentColor" 
               viewBox="0 0 20 20" 
               xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
          </svg>
          <!-- <v-icon>{{ hover ? 'mdi-account-multiple' : 'mdi-account-multiple-outline' }}</v-icon>  -->
        </v-btn>
      </v-hover>
     </template>
    <span>Find Friends</span>
  </v-tooltip>
</template>