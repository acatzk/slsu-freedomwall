<template>
  <v-menu offset-y 
          transition="slide-y-transition" 
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
                class="ml-2 secondary--text focus:outline-none">
          <v-badge
            color="error"
            overlap
            content="5"
          >
            <svg v-if="!hover && !menu"
                 class="w-6 h-6" 
                 fill="none" 
                 stroke="currentColor" 
                 viewBox="0 0 24 24" 
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
              </path>
            </svg>
            <svg v-else
                 class="w-6 h-6" 
                 fill="currentColor" 
                 viewBox="0 0 20 20" 
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
            </svg>
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
        <v-btn text 
               small 
               class="focus:outline-none">
          View Read (5)
        </v-btn>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon
                   v-bind="attrs"
                   v-on="on"
                   class="focus:outline-none">
              <svg class="w-6 h-6" 
                   fill="currentColor" 
                   viewBox="0 0 20 20" 
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" 
                      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" 
                      clip-rule="evenodd">
                </path>
              </svg>
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