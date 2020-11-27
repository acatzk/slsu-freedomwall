<template>
  <v-menu offset-y transition="slide-x-transition">  
    <template v-slot:activator="{ on, attrs }">  
      <v-hover v-slot="{ hover }">
        <v-btn depressed
                text
                fab
                small
                v-bind="attrs"
                v-on="on"
                class="ml-2 gray--text">
          <v-badge
            color="error"
            overlap
            content="5"
          >
            <v-icon>{{ hover ? 'mdi-bell' : 'mdi-bell-outline' }}</v-icon>
          </v-badge>
        </v-btn>
      </v-hover>
    </template>
    <v-card
      min-height="200 auto"
      width="256"
      class="mx-auto"
    >
      <v-card-actions>
        <v-btn text small>
          View Read (5)
        </v-btn>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon
                   v-bind="attrs"
                   v-on="on">
              <v-icon>mdi-email-open</v-icon>
            </v-btn>
          </template>
        <span>Mark all read</span>
      </v-tooltip>
      </v-card-actions>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
      }
    },
  }
</script>