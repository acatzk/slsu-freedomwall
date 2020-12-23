<template>
  <main-bar>
    <main-container>
      <div class="relative overflow-y-hidden overflow-x-hidden w-full h-full flex mt-2">
        <div class="flex-none w-60 flex-col hidden md:block">
          <link-card :links="links"
                     :userProfile="userProfile">
          </link-card>
        </div>
        <div class="md:mx-5 space-y-3 w-full">
          <!-- <stories /> -->
          <post-card /> <!-- POST PHOTO, JOB, ARTICLE AND VIDEO -->
          <div v-for="i in 10" :key="i">
            <feeds-card />
          </div>
        </div>
        <div class="w-80 flex-none hidden md:block">
          <user-star-card :users="users"
                          :userProfile="userProfile">
          </user-star-card>
        </div>
      </div>
    </main-container>
  </main-bar>
</template>

<script>
  import { firebase } from '@/services'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'home',
    components: {
      MainBar: () => import('@/components/layouts/MainBar'),
      PostCard: () => import('@/components/pages/home/PostCard'),
      MainContainer: () => import('@/components/layouts/MainContainer'),
      Stories: () => import('@/components/sections/home/Stories'),
      UserStarCard: () => import('@/components/pages/home/UserStarCard'),
      FeedsCard: () => import('@/components/pages/home/FeedsCard.vue'),
      LinkCard: () => import('@/components/pages/home/LinkCard')
    },
    data () {
      return {
        users: [
          {
            id: 14,
            displayName: 'Maria Vina Gerodias Calibudbud Calibud',
            star: '45',
            photoURL:'https://pbs.twimg.com/profile_images/1178531311708884993/k1pwXwbf_400x400.jpg'
          },
          {
            id: 1,
            displayName: 'Joshua Galit',
            star: '45',
            photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pAOsqHlOQoL9HHp8nYPU19br-wZpt4cEPg&usqp=CAU'
          },
          {
            id: 2,
            displayName: 'Jerome Villaruel',
            star: '87',
            photoURL: 'https://avatars2.githubusercontent.com/u/26340308?s=460&u=12395feb4089a57a915f93d5d8cf6c0068b105fc&v=4'
          },
          {
            id: 3,
            displayName: 'Gilchrist Calunia',
            star: '26',
            photoURL: 'https://avatars1.githubusercontent.com/u/65806779?s=460&u=03752090c3e22f46c1b7759b59daf1d871aada85&v=4'
          },
          {
            id: 4,
            displayName: 'Resamae Cabulang',
            star: '54',
            photoURL: 'https://avatars2.githubusercontent.com/u/29187606?s=460&u=4503388a883486415e5d8a8a9eda1365cc7beeae&v=4'
          },
          {
            id: 6,
            displayName: 'Emman Rosal',
            star: '86',
            photoURL: 'https://i0.wp.com/peoplaid.com/wp-content/uploads/2019/12/Noel-Rosal.jpg?fit=535%2C451&ssl=1'
          },
          {
            id: 7,
            displayName: 'John Luar',
            star: '53',
            photoURL: 'https://cdn2.tstatic.net/tribunnews/foto/bank/images/blak-blakan-putri-john-kei-ungkap-perubahan-dasyat-papanya-setelah-keluar-dari-nusakambangan.jpg'
          },
          {
            id: 8,
            displayName: 'Michale Nicolas',
            star: '43',
            photoURL: 'https://everydaynutrition.co.uk/wp-content/uploads/2015/01/default-user-avatar-300x300.png'
          },
          {
            id: 9,
            displayName: 'Joseff Beronio',
            star: '76',
            photoURL: 'https://everydaynutrition.co.uk/wp-content/uploads/2015/01/default-user-avatar-300x300.png'
          },
          {
            id: 10,
            displayName: 'Christian Bongalan',
            star: '53',
            photoURL: 'https://everydaynutrition.co.uk/wp-content/uploads/2015/01/default-user-avatar-300x300.png'
          },
          {
            id: 12,
            displayName: 'Celda mae dagohoy',
            star: '12',
            photoURL: 'https://everydaynutrition.co.uk/wp-content/uploads/2015/01/default-user-avatar-300x300.png'
          },
          {
            id: 13,
            displayName: 'Goki Shibukawa',
            star: '32',
            photoURL: 'https://everydaynutrition.co.uk/wp-content/uploads/2015/01/default-user-avatar-300x300.png'
          },
        ],
        links: [
          {
            id: 'home',
            title: 'Home',
            icon: '<svg fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M5.114 27.944v-9.517H2.66a.668.668 0 01-.47-1.134L15.41 3.748a.819.819 0 011.166-.008l.007.007 6.9 7.037v-1.3a.553.553 0 01.55-.556h2.292a.553.553 0 01.549.556v4.78l2.938 3.036a.671.671 0 01-.01.942.657.657 0 01-.462.19h-2.464v9.517a.553.553 0 01-.549.556H5.664a.553.553 0 01-.55-.561z" fill="#3dbcf3" fill-rule="evenodd"></path><path xmlns="http://www.w3.org/2000/svg" d="M21.718 15.07a2.841 2.841 0 00-2.826 2.857 2.876 2.876 0 00.224 1.116l-2.061 2.083v-6.335a2.826 2.826 0 10-2.12 0v6.335l-2.061-2.083a2.876 2.876 0 00.224-1.116 2.826 2.826 0 10-2.826 2.858 2.791 2.791 0 001.1-.227l3.559 3.6V28.5h2.12v-4.343l3.56-3.6a2.782 2.782 0 001.1.227 2.858 2.858 0 000-5.715zm-11.446 4a1.143 1.143 0 111.13-1.143 1.136 1.136 0 01-1.13 1.143zM16 13.284a1.143 1.143 0 111.131-1.143A1.136 1.136 0 0116 13.284zm5.723 5.786a1.143 1.143 0 111.131-1.143 1.136 1.136 0 01-1.136 1.143z" fill="#fff"></path></svg>',
            to: '/home'
          },
          {
            id: 'friends',
            title: 'Friends',
            icon: '<svg class="error--text" fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M13 6a3 3 0 11-6 0 3 3 0 016 0zm5 2a2 2 0 11-4 0 2 2 0 014 0zm-4 7a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zm10 10v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>',
            to: '/friends'
          },
          {
            id: 'events',
            title: 'Events',
            icon: '<svg class="accent--text" fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>',
            to: '/events'
          },
          {
            id: 'dark-mode',
            title: 'Dark Mode',
            icon: '<svg class="black--text" fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>'
          },
          {
            id: 'about',
            title: 'About',
            icon: '<svg class="info--text" fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>',
            to: '/about'
          },
          {
            id: 'saved',
            title: 'Saved',
            icon: '<svg class="success--text" fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet" x="1509"><path xmlns="http://www.w3.org/2000/svg" d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path></svg>',
            to: '/saved'
          },
          {
            id: 'settings',
            title: 'Settings',
            icon: '<svg fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M23.265 24.381l.9-.894c4.164.136 4.228-.01 4.411-.438l1.144-2.785.085-.264-.093-.231c-.049-.122-.2-.486-2.8-2.965V15.5c3-2.89 2.936-3.038 2.765-3.461l-1.139-2.814c-.171-.422-.236-.587-4.37-.474l-.9-.93a20.166 20.166 0 00-.141-4.106l-.116-.263-2.974-1.3c-.438-.2-.592-.272-3.4 2.786l-1.262-.019c-2.891-3.086-3.028-3.03-3.461-2.855L9.149 3.182c-.433.175-.586.237-.418 4.437l-.893.89c-4.162-.136-4.226.012-4.407.438l-1.146 2.786-.09.267.094.232c.049.12.194.48 2.8 2.962v1.3c-3 2.89-2.935 3.038-2.763 3.462l1.138 2.817c.174.431.236.584 4.369.476l.9.935a20.243 20.243 0 00.137 4.1l.116.265 2.993 1.308c.435.182.586.247 3.386-2.8l1.262.016c2.895 3.09 3.043 3.03 3.466 2.859l2.759-1.115c.436-.173.588-.234.413-4.436zm-11.858-6.524a4.957 4.957 0 116.488 2.824 5.014 5.014 0 01-6.488-2.824z" fill="#99b8c4"></path></svg>',
            to: '/settings'
          },
          {
            id: 'logout',
            title: 'Logout',
            icon: '<svg class="lightblue--text" fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>',
            to: '/logout'
          }
        ]
      }
    },
    computed: {
      ...mapGetters('user', {
        userProfile: 'userProfile',
        loggedIn: 'loggedIn'
      })
    }
  }
</script>
