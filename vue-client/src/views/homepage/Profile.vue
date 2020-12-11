<template>
  <main-bar>
    <main-container>
      <v-card>
        <v-row class="flex items-center justify-center w-full h-scree">
          <v-col cols="12" lg="12" md="12" sm="12">
              <h1>Content Profile</h1>
          </v-col>
        </v-row>
      </v-card>
    </main-container>
  </main-bar>
</template>

<script>
  export default {
    name: 'profile',
    components: {
      MainBar: () => import('@/components/layouts/MainBar'),
      MainContainer: () => import('@/components/layouts/MainContainer')
    }
  }
</script>