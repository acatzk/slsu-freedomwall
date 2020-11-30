<template>
  <v-menu offset-y 
          transition="slide-x-transition" 
          :close-on-content-click="false"
          v-model="menu">  
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
      min-height="200"
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

      <v-list two-line dense>
        <template v-for="(item, index) in items">
          <v-list-item link :key="index" @click="menu = false">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </v-menu>
</template>


<script>
  export default {
    data () {
      return {
        menu: false,
        items: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
            subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            title: 'Birthday gift',
            subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
            title: 'Recipe to try',
            subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
          }
        ]
      }
    },
  }
</script>