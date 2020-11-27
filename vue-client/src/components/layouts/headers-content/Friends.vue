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
              class="gray--text">
          <v-icon>{{ hover ? 'mdi-account-multiple' : 'mdi-account-multiple-outline' }}</v-icon> 
        </v-btn>
      </v-hover>
     </template>
    <span>Find Friends</span>
  </v-tooltip>
</template>