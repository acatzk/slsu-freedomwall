<template>
  <v-card class="rounded-lg mb-4" flat outlined>
    <v-card-actions class="m-2 flex flex-col">
      <v-btn outlined text block large rounded class="flex justify-start focus:outline-none bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              data-supported-dps="24x24" 
              fill="currentColor" 
              class="mercado-match w-6 h-6 mr-3 text-gray-500"
              focusable="false">
          <path d="M19 12h2v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h6v2H6a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1zm4-8a2.91 2.91 0 01-.87 2l-8.94 9L7 17l2-6.14 9-9A3 3 0 0123 4zm-4 2.35L17.64 5l-7.22 7.22 1.35 1.34z"></path>
        </svg>
        <span class="text-xs capitalize text-gray-500">Start a post</span>
      </v-btn>
      <div class="flex items-center justify-between mt-2">
        <v-btn text class="flex items-center justify-center focus:outline-none capitalize text-capitalize">
          <svg fill="currentColor" 
                class="w-6 h-6 mr-2"
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 32 32" 
                preserveAspectRatio="xMidYMid meet">
            <path xmlns="http://www.w3.org/2000/svg" 
                  d="M30 5.851v20.298H2V5.851h28" 
                  fill="#2dcc9f">
            </path>
            <path xmlns="http://www.w3.org/2000/svg" 
                  d="M24.232 8.541a2.2 2.2 0 101.127.623 2.212 2.212 0 00-1.127-.623M18.111 20.1q-2.724-3.788-5.45-7.575L4.579 23.766h10.9q1.316-1.832 2.634-3.663M22.057 16q-2.793 3.882-5.584 7.765h11.169Q24.851 19.882 22.057 16z" 
                  fill="#fff">
            </path>
          </svg>
          <span class="text-xs text-gray-500 hidden md:block">Photo</span>
        </v-btn>
        <v-btn text class="flex items-center focus:outline-none capitalize text-capitalize">
          <svg class="w-6 h-6 mr-2"
                fill="currentColor" 
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 32 32" 
                preserveAspectRatio="xMidYMid meet">
            <path xmlns="http://www.w3.org/2000/svg" 
                  d="M4.5 2.375A2.562 2.562 0 015.861 2h20.366a2.545 2.545 0 012.423 1.951 3.37 3.37 0 01.072.862v11.176h-1.573a1.814 1.814 0 00-.22.022 5.236 5.236 0 00-.581-.011c-.3.007-.61-.014-.914.014a2.275 2.275 0 00-.4-.02h-4.739c-.2 0-.392.008-.587-.01l.1-.065-6.353-3.813v3.889c-2.213-.005-4.427 0-6.64 0a2.274 2.274 0 00-.251.021c-.212-.032-.427-.016-.642-.016-.284.006-.57-.015-.853.015a2.052 2.052 0 00-.253-.022H3.275c.006-3.635 0-7.27 0-10.9a4.786 4.786 0 01.071-1.131A2.541 2.541 0 014.5 2.375zm.54 2.188a.639.639 0 00-.489.606v1.316a.639.639 0 00.627.6h1.309a.638.638 0 00.6-.608c.005-.426 0-.853 0-1.279a.644.644 0 00-.329-.575.708.708 0 00-.358-.078H5.264a1.081 1.081 0 00-.224.018zm20.341 0a.639.639 0 00-.474.607v1.306a.638.638 0 00.6.608c.436.005.872 0 1.308 0a.639.639 0 00.627-.606c.006-.438 0-.876 0-1.314a.638.638 0 00-.594-.621c-.348-.009-.7 0-1.045 0a1.98 1.98 0 00-.422.024zM5.042 8.38a.637.637 0 00-.452.4 1.078 1.078 0 00-.041.386v1.135a.637.637 0 00.6.6c.4.008.795 0 1.192 0a.826.826 0 00.395-.065.641.641 0 00.36-.574V8.983a.638.638 0 00-.6-.624c-.338-.008-.677 0-1.016 0a2.385 2.385 0 00-.438.021zm20.338 0a.637.637 0 00-.433.4 1.072 1.072 0 00-.041.387v1.131a.638.638 0 00.608.607c.406.006.812 0 1.218 0a.739.739 0 00.38-.078.64.64 0 00.335-.558V8.985a.637.637 0 00-.593-.622c-.349-.009-.7 0-1.047 0a1.928 1.928 0 00-.428.022zM5.041 12.2a.639.639 0 00-.491.608c0 .438-.005.877 0 1.315a.638.638 0 00.627.6h1.3a.638.638 0 00.608-.607v-1.307a.638.638 0 00-.605-.626c-.348-.007-.7 0-1.045 0a2.12 2.12 0 00-.394.017zm20.335.006a.635.635 0 00-.43.394 1.06 1.06 0 00-.041.386v1.131a.638.638 0 00.607.608c.435.005.87 0 1.306 0a.639.639 0 00.628-.605c.006-.438 0-.876 0-1.313a.637.637 0 00-.592-.622c-.349-.01-.7 0-1.046 0a1.908 1.908 0 00-.431.015z" fill="#e75749">
            </path>
            <path xmlns="http://www.w3.org/2000/svg" 
                  d="M13.458 12.1q3.176 1.908 6.353 3.813l-.1.065q-3.127 1.872-6.251 3.748V15.99c-.001-1.295-.004-2.59-.002-3.89z" 
                  fill="#fff">
            </path>
            <path xmlns="http://www.w3.org/2000/svg" 
                  d="M3.275 15.988h1.541a2.052 2.052 0 01.253.022.645.645 0 00-.409.273.883.883 0 00-.111.518v1.045a.686.686 0 00.685.689h1.192a.68.68 0 00.657-.569c.008-.447 0-.9 0-1.343a.632.632 0 00-.521-.613 2.274 2.274 0 01.251-.021h6.64v3.736q3.127-1.871 6.251-3.748c.2.018.391.007.587.01h4.741a2.275 2.275 0 01.4.02.637.637 0 00-.475.385.983.983 0 00-.045.407v1.014a.677.677 0 00.691.719h1.16a.684.684 0 00.686-.658v-.984a1.074 1.074 0 00-.1-.589.642.642 0 00-.42-.292 1.814 1.814 0 01.22-.022h1.573c.011 1.721 0 3.443 0 5.165v6.293a2.567 2.567 0 01-.612 1.651 2.539 2.539 0 01-1.563.868 7.534 7.534 0 01-.981.033H6.724a9.27 9.27 0 01-1.368-.048 2.557 2.557 0 01-2-1.846 2.825 2.825 0 01-.09-.746V16.891c.007-.3-.002-.602.009-.903zm1.795 3.843a.613.613 0 00-.386.234.761.761 0 00-.134.464v1.162a.685.685 0 00.686.658h1.283a.687.687 0 00.568-.716v-1.191a.617.617 0 00-.2-.458.712.712 0 00-.487-.17H5.264a1.039 1.039 0 00-.194.017zm20.366 0a.62.62 0 00-.522.58v1.222a.676.676 0 00.69.718c.428 0 .857.005 1.285 0a.7.7 0 00.562-.684v-1.013a.9.9 0 00-.123-.568.661.661 0 00-.532-.267h-.954a2.246 2.246 0 00-.406.011zM5.071 23.648a.609.609 0 00-.4.249.766.766 0 00-.124.448v1.132a.7.7 0 00.6.688h1.376a.687.687 0 00.567-.717v-1.189a.617.617 0 00-.2-.459.71.71 0 00-.484-.17H5.265a1.028 1.028 0 00-.194.018zm20.362 0a.616.616 0 00-.492.427.99.99 0 00-.029.33V25.6a.681.681 0 00.656.567h1.193a.689.689 0 00.686-.719v-1.164a.657.657 0 00-.286-.545 1.461 1.461 0 00-.787-.11c-.312.01-.629-.02-.94.018z" 
                  fill="#c0392b">
            </path>
          </svg>
          <span class="text-xs text-gray-500 hidden md:block">Video</span>
        </v-btn>
        <v-btn text class="flex items-center focus:outline-none capitalize text-capitalize">
          <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                data-supported-dps="24x24" 
                fill="currentColor" 
                class="mercado-match w-6 h-6 mr-2 text-yellow-500" 
                focusable="false">
            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
          </svg>
          <span class="text-xs text-gray-500 hidden md:block">Job</span>
        </v-btn>
        <v-btn text class="flex items-center focus:outline-none capitalize text-capitalize">
          <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                data-supported-dps="24x24" 
                fill="currentColor" 
                class="mercado-match w-6 h-6 mr-2 text-green-500" 
                focusable="false">
            <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
          </svg>
          <span class="text-xs text-gray-500 hidden md:block">Write Article</span>
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>