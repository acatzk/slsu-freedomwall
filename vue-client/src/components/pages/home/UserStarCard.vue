<template>
  <v-card style="position: fixed;" class="rounded-lg overflow-y-hidden fixed w-80" flat outlined>
    <v-card-text class="border-b border-gray-200">
      <span class="text-md text-gray-500">Star the people you may know</span>
    </v-card-text>
    <v-list two-line class="overflow-y-auto h-96">
      <template v-for="(item, index) in users">
        <v-list-item :key="`${item.id}-user`" class="flex items-center" link>
          <div class="flex">
            
            <router-link :to="{ name: 'profile', params: { id: userProfile.uid } }">
              <v-list-item-avatar>
                <v-img :src="item.photoURL"></v-img>
              </v-list-item-avatar>
            </router-link>
            
            <v-list-item-content>
              <v-list-item-title class="text-capitalize">
                <router-link :to="{ name: 'profile', params: { id: userProfile.uid } }">
                  <span class="darkblueshade--text hover:underline">
                    {{ item.displayName.length > 15 ? item.displayName.slice(0, 15) + '...' : item.displayName }}
                  </span>
                </router-link>
              </v-list-item-title>
              <v-list-item-subtitle class="flex items-center">
                <span class="font-semibold mr-1">{{ item.star }}</span> star
              </v-list-item-subtitle>
            </v-list-item-content>
          </div>
          <v-btn small text outlined fab class="focus:outline-none">
            <v-icon>mdi-star-outline</v-icon>
          </v-btn>
        </v-list-item>
        <v-divider :key="index"></v-divider>
      </template>
      <div class="flex items-center justify-center py-3">
        <router-link :to="{ name: 'friends' }" class="focus:outline-none hover:underline text-lightblue text-gray-600 hover:text-blue-800">
          See More
        </router-link>
      </div>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: 'user-star-card',
    props: {
      users: {
        type: Array,
        required: true
      },
      userProfile: {
        type: Object,
        required: true
      }
    }
  }
</script>