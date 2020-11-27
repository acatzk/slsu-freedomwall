<template>
  <v-navigation-drawer
    v-model="show"
    fixed
    clipped
    color="transparent"
  >
    
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-img src="@/assets/logo.png" max-width="25"/>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="font-weight-medium primary--text">
            Freedom Wall
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <!-- ACTUAL NAVIGATION LINKS -->
    <v-list nav>
      <v-list-item link
                    v-for="item in links"
                    :key="item.title"
                    :to="item.to">
        <v-list-item-icon>
          <v-icon>
            {{ $route.path === item.to  ? item.icon : item.icon + '-outline' }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'side-bar',
    props: {
      visible: {
        type: Boolean,
        required: true
      }
    },
    data () {
      return {
        drawer: true,
        isXs: false,
        links: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/v/dashboard' },
          { title: 'Schedules', icon: 'mdi-calendar', to: '/v/schedules' },
          { title: 'Lessons', icon: 'mdi-book-open', to: '/v/lessons' }
        ]
      }
    },
    computed: {
      show: {
        get () {
          return this.visible
        },
        set (value) {
          if (!value) {
            this.$emit('close')
          }
        }
      }
    },
    methods: {
      onResize () {
        this.isXs = window.innerWidth < 940;
      }
    },
    watch: {
      isXs (value) {
        if (!value) {
          if (this.drawer) {
            this.drawer = false;
          }
        }
      }
    },
    mounted() {
      this.onResize()
      window.addEventListener("resize", this.onResize, { 
        passive: true 
      })
    }
  }
</script>