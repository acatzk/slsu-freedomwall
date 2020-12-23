<template>
  <div class="mx-auto bg-white shadow-sm rounded-lg">
    <header class="flex items-center justify-between mx-2 py-2">
      <div class="p-2 flex items-center">
        <div class="flex-shrink-0">
          <a href="#">
            <img class="w-10 h-10 object-cover rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pAOsqHlOQoL9HHp8nYPU19br-wZpt4cEPg&usqp=CAU" alt="">
          </a>
        </div>
        <div class="ml-2 flex flex-col leading-normal ">
          <div class="flex items-center">
            <a class="font-medium text-xs hover:underline text-gray-900 tracking-wide hover:text-blue-900" href="#">Joshua Galit</a>
            <span class="ml-1 text-gray-500">&bull;</span>
            <span class="ml-1 text-xs font-extralight text-gray-400">3 days ago</span>
            <span class="ml-1">
              <svg class="w-4 h-4"
                  stroke="currentColor" 
                  fill="none" 
                  xmlns:xlink="http://www.w3.org/1999/xlink" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  preserveAspectRatio="xMidYMid meet" 
                  data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio">
                <path xmlns="http://www.w3.org/2000/svg" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="1" 
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                </path>
              </svg>
            </span>
          </div>
          <div class="flex items-center">
            <span class="text-xs font-extralight">✦ 25</span>
            <v-btn text outlined x-small class="ml-2 focus:outline-none">
              <v-icon x-small>mdi-star-outline</v-icon>
              <span class="ml-1 text-capitalize">Star</span>
            </v-btn>
          </div>
        </div>
      </div>
      <div class="-mt-3 mr-2">
        <v-menu offset-y transition="slide-y-transition" bottom left>
          <template v-slot:activator="{ on, attrs }">
            <button class="block" v-bind="attrs" v-on="on">
              <svg class="w-6 h-6" 
                    stroke="currentColor" 
                    fill="none" 
                    xmlns:xlink="http://www.w3.org/1999/xlink" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    preserveAspectRatio="xMidYMid meet" 
                    data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio">
                <path xmlns="http://www.w3.org/2000/svg" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
                </path>
              </svg>
            </button>
          </template>
          <v-list dense>
            <v-list-item-group v-for="(item, i) in menus" :key="i">
              <v-list-item>
                <span v-html="item.icon"></span>
                <v-list-item-content class="ml-3">
                  <span class="text-xs font-semibold">{{ item.text }}</span>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </div>
    </header>
    <main>
      <div class="mx-5">
        <span class="text-sm">Writing is thinking. And *writing* about your growing competence is *thinking* about your growing competence.</span>
      </div>
      <div class="w-full">
        <img src="https://media-exp1.licdn.com/dms/image/sync/C4D27AQHKoWl1VcITmw/articleshare-shrink_800/0/1608221315637?e=1608696000&v=beta&t=YzU-kPlL5Ia4JtPyRVHnBmNYdvuY_KpfvhPzlPSVby0" alt="">
      </div>
    </main>
    <footer>
      <div class="flex items-center justify-between p-1">
        <button class="flex items-center justify-center block w-full p-2 bg-gray-100 rounded-lg">
          <div>
            <svg class="w-5 h-5" stroke="currentColor" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio"><path xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
          </div>
          <span class="ml-3 font-medium text-sm hidden sm:block">Like</span>
        </button>
        <button class="flex items-center justify-center block w-full p-2 bg-gray-100 mx-1 rounded-lg">
          <div>
            <svg class="w-5 h-5" stroke="currentColor" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio"><path xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          </div>
          <span class="ml-3 font-medium text-sm hidden sm:block">Comment</span>
        </button>
        <button class="flex items-center justify-center block w-full p-2 bg-gray-100 rounded-lg">
          <div>
            <svg class="w-5 h-5" stroke="currentColor" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio"><path xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
          </div>
          <span class="ml-3 font-medium text-sm hidden sm:block">Comment</span>
        </button>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'feeds-card',
    data () {
      return {
        menus: [
          {
            icon: '<svg  class="w-5 h-5" stroke="currentColor" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio"> <path xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>',
            text: 'Save'
          },
          {
            icon: '<svg class="w-5 h-5" stroke="currentColor" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio"><path xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>',
            text: 'Share'
          },
          {
            icon: '<svg class="w-5 h-5" stroke="currentColor" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio"><path xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>',
            text: 'View post'
          },
          {
            icon: '<svg class="w-5 h-5" stroke="currentColor" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio"><path xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>',
            text: 'Copy link to post'
          },
          {
            icon: '<svg class="w-5 h-5" stroke="currentColor" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio"><path xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7A9.97 9.97 0 014.02 8.971m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>',
            text: 'I dont want to see this'
          }
        ]
      }
    }
  }
</script>