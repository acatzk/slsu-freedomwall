<template>
  <v-card class="mx-auto h-64" flat outlined >
    <div class="flex items-center justify-between mx-2 py-1">
      <div class="p-2 flex items-center">
        <div>
          <a href="#">
            <img class="w-10 h-10 object-cover rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pAOsqHlOQoL9HHp8nYPU19br-wZpt4cEPg&usqp=CAU" alt="">
          </a>
        </div>
        <div class="ml-2 flex flex-col leading-none">
          <div class="flex items-center mt-1">
            <a class="font-medium text-xs hover:underline text-gray-900 tracking-wide" href="#">Joshua Galit</a>
            <span class="ml-1">&bull;</span>
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
              <v-icon small>mdi-star-outline</v-icon>
              <span class="ml-1 text-capitalize">Star</span>
            </v-btn>
          </div>
        </div>
      </div>
      <div>
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
            <v-list-item-group>
              <v-list-item>
                <v-list-item-icon>
                  <svg  class="w-5 h-5" 
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
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z">
                    </path>
                  </svg>
                </v-list-item-icon>
                <v-list-item-content>
                  <span class="text-xs font-semibold">Save</span>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </div>
    </div>
  </v-card>
</template>