<template>  
  <div class="mx-10">
    <vue-horizontal-list :items="stories">
      <template v-slot:start>
        <ul class="flex">
          <li class="flex flex-col items-center">
            <div class="relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
              <a class="block bg-white p-1 rounded-full transform hover:-rotate-6 transition" href="#">
                <img class="h-16 w-16 rounded-full object-cover flex-shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pAOsqHlOQoL9HHp8nYPU19br-wZpt4cEPg&usqp=CAU" alt="stories-profile">
              </a>
              <button class="absolute bottom-0 right-0 bg-blue-500 rounded-full text-white focus:outline-none hover:bg-blue-700">
                <svg  class="w-5 h-5 border-2 border-white rounded-full" 
                      stroke="currentColor" 
                      fill="none"
                      xmlns:xlink="http://www.w3.org/1999/xlink" 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      preserveAspectRatio="xMidYMid meet">
                  <path xmlns="http://www.w3.org/2000/svg" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                  </path>
                </svg>
              </button>
            </div>
            <a href="#">angryboy19</a>
          </li>
        </ul>
      </template>
      <template v-slot:default="{ item }" style="width: 0px !important; padding-left: 0 !important; padding-right: 0px !important;">
        <ul class="flex">
          <li class="flex flex-col items-center">
            <div class="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
              <a class="block bg-white p-1 rounded-full transform hover:-rotate-6 transition" href="#">
                <img class="h-16 w-16 rounded-full object-cover flex-shrink-0" :src="item.photoUrl" alt="stories-profile">
              </a>
            </div>
            <a href="#">{{ item.username }}</a>
          </li>
        </ul>
      </template>
    </vue-horizontal-list>
  </div>
</template>

<script>
  export default {
    name: 'stories',
    components: {
      VueHorizontalList:() => import('vue-horizontal-list')
    },
    data () {
      return {
        stories: [
          {
            username: 'veoscript',
            photoUrl: 'https://avatars2.githubusercontent.com/u/26340308?s=460&u=12395feb4089a57a915f93d5d8cf6c0068b105fc&v=4'
          },
          {
            username: 'gilchrist',
            photoUrl: 'https://avatars1.githubusercontent.com/u/65806779?s=460&u=03752090c3e22f46c1b7759b59daf1d871aada85&v=4'
          },
          {
            username: 'resmae',
            photoUrl: 'https://avatars2.githubusercontent.com/u/29187606?s=460&u=4503388a883486415e5d8a8a9eda1365cc7beeae&v=4'
          },
          {
            username: 'luar09',
            photoUrl: 'https://cdn2.tstatic.net/tribunnews/foto/bank/images/blak-blakan-putri-john-kei-ungkap-perubahan-dasyat-papanya-setelah-keluar-dari-nusakambangan.jpg'
          },
          {
            username: 'michael',
            photoUrl: 'https://everydaynutrition.co.uk/wp-content/uploads/2015/01/default-user-avatar-300x300.png'
          }
        ]
      }
    }
  }
</script>