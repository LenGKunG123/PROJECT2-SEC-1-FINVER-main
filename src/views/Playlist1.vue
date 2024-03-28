<script setup>
import { onBeforeMount, ref } from 'vue';
import SongRow from '../components/songRow.vue'
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue';
import Heart from 'vue-material-design-icons/Heart.vue';
// import artist from '../../data/db.json'
import Sidebar from '@/components/Sidebar.vue';
import MusicPlayer from '@/components/MusicPlayer.vue';
import { useSongStore } from '../stores/song.js'
import { storeToRefs } from 'pinia';

import { getSongs } from '@/libs/fetchUtils'; // นำเข้าฟังก์ชัน getSongs ที่สร้างขึ้น
import MusicPlayerVolunm from '@/components/MusicPlayerVolunm.vue';


const useSong = useSongStore()
const { isPlaying, currentTrack, currentArtist } = storeToRefs(useSong)

const playFunc = () => {
    if (currentTrack.value) {
        useSong.playOrPauseThisSong(currentArtist.value, currentTrack.value)
        return
    }
    useSong.playFromFirst()
}

// สร้างตัวแปร artist เพื่อเก็บข้อมูลที่จะดึงมาจาก JSON Server
const artist = ref(null);
console.log(artist)

// สร้างฟังก์ชันเพื่อดึงข้อมูลเมื่อ Component ถูกโหลด
const fetchData = async () => {
    try {
        // ใช้ await เพื่อรอให้ข้อมูลถูกโหลดเสร็จสมบูรณ์
        artist.value = await getSongs('http://localhost:5002/albums');
        console.log(artist.value);
        console.log(artist.value.album1.albumCover);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// เรียกใช้งาน fetchData เพื่อดึงข้อมูลเมื่อ Component ถูกโหลด

onBeforeMount(() => {
    fetchData();
});




</script>

<template>
  <MusicPlayer v-if="currentTrack"/>
        <Sidebar />

        <div class="ml-60">
            <div class="p-8 overflow-x-hidden" v-if="artist">

                <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer"
                    >
                    {{ artist?.album1.name }}
                </button>

                <div class="py-1.5"></div>
                <div class="flex items-center w-full relative h-full">
                    <img width="140" :src="artist?.album1.albumCover" class="w-36">

                    <div class="w-full ml-5">

                        <div style="font-size: 33px;"
                            class="text-white absolute w-full hover:underline cursor-pointer top-0 font-bosemiboldld">
                            {{ artist?.album1.tracks.name }}
                        </div>

                        <div class="text-gray-300 text-[13px] flex">
                            <div class="flex">Album</div>
                            <div class="ml-2 flex">
                                <div class="circle mt-2 mr-2" />
                                <span class="-ml-0.5">{{ artist?.album1.releaseYear }}</span>
                            </div>
                            <div class="ml-2 flex">
                                <div class="circle mt-2 mr-2" />
                                <span class="-ml-0.5">{{ artist?.album1.tracks.length }} songs</span>
                            </div>
                        </div>

                        <div class="absolute flex gap-4 items-center justify-start bottom-0 mb-1.5">
                            <button class="p-1 rounded-full bg-white" @click="playFunc()">
                                <Play v-if="!isPlaying" fillColor="#181818" :size="25" />
                                <Pause v-else fillColor="#181818" :size="25" />
                            </button>
                            <button type="button">
                                <Heart fillColor="#1BD760" :size="30" />
                            </button>
                            <button type="button">
                                <DotsHorizontal fillColor="#FFFFFF" :size="25" />
                            </button>
                        </div>
                    </div>
                </div>

                <div class="mt-6"></div>
                <div class="flex items-center justify-between px-5 pt-2">
                    <div class="flex items-center justify-between text-gray-400">
                        <div class="mr-7">#</div>
                        <div class="text-sm">Title</div>
                    </div>
                    <div>
                        <ClockTimeThreeOutline fillColor="#FFFFFF" :size="18" />
                    </div>
                </div>
                <div class="border-b border-b-[#2A2A2A] mt-2"></div>
                <div class="mb-4"></div>
                <ul class="w-full" v-for="track, index in artist?.album1.tracks" :key="track">
                    <SongRow :artist="artist" :track="track" :index="++index" />
                </ul>
            </div>

        </div>
  
</template>

<style scoped>
.circle {
    width: 4px;
    height: 4px;
    background-color: rgb(189, 189, 189);
    border-radius: 100%;
}
</style>
