<script setup>
import { ref} from "vue";
import { getSongByName } from "@/libs/fetchUtils"; // Import the function
import { useSongStore } from '../stores/song.js'
import { storeToRefs } from 'pinia';
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';


const searchInput = ref("");
const foundSong = ref(null); // Store the found song

const useSong = useSongStore()
const { isPlaying, currentTrack, currentArtist } = storeToRefs(useSong)

const search = async () => {
  searchInput.value = searchInput.value.trim();

  // Check if the search input is valid
  if (!isValidInput()) {
    return;
  }

  // Call the getSongByName function with the search input
  foundSong.value = await getSongByName('http://localhost:5002/albums', searchInput.value);

  // Optionally, you can perform additional actions based on the found song
};

const isValidInput = () => {
  return searchInput.value !== "";
};

const playFunc = () => {
  if (currentTrack.value) {
    // ตรวจสอบว่าเพลงปัจจุบันกำลังเล่นหรือไม่
    if (isPlaying.value && currentArtist.value === foundSong.value.artist && currentTrack.value.id === foundSong.value.id) {
      // ถ้าเป็นเช่นนั้นหยุดเพลง
      useSong.playOrPauseSong();
    } else {
      // หากไม่ใช่เล่นเพลงใหม่
      useSong.playOrPauseThisSong(foundSong.value.artist, foundSong.value);
    }
  }
}


</script>

<template>
  <div class="w-full pt-2">
    <div class="flex items-center container p-3">
      <svg @click="search" class="absolute m-2 w-5 h-5  text-white dark:text-white" fill="none" stroke="currentColor"
        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
      <input type="text" v-model="searchInput" @keydown.enter="search" class="outline-none block w-full p-3 pl-8 text-lg text-white border border-gray-300 rounded-lg bg-gray-600
        focus:ring-white focus:border-white 
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
        dark:focus:ring-white dark:focus:border-white " placeholder="Search...">
    </div>
    <!-- Display the found song -->
    <div v-if="foundSong" class="mt-4 cursor-pointer">
      <div class="flex items-center text-white bg-gray-800 p-4 rounded-lg shadow-md w-6/6 mr-36 ml-3">
        <img :src="foundSong.songCover" alt="Song Cover" class="w-16 h-16 rounded-md mr-4">
        <div class="flex-grow">
          <p class="text-lg font-semibold">{{ foundSong.name }}</p>
          <p class="text-sm text-gray-400">{{ foundSong.albumName }}</p>          
        </div>
        <div class="flex items-center" @click="playFunc">          
          <Play v-if="!isPlaying" fillColor="#fff" :size="40" />
          <Pause v-else fillColor="#fff" :size="40" />          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add your component-specific styles here */
</style>
