<script setup>
import SongRow from "../components/songRow.vue";
import Play from "vue-material-design-icons/Play.vue";
import Pause from "vue-material-design-icons/Pause.vue";
import DotsHorizontal from "vue-material-design-icons/DotsHorizontal.vue";
import Heart from "vue-material-design-icons/Heart.vue";
import ClockTimeThreeOutline from "vue-material-design-icons/ClockTimeThreeOutline.vue";
import artist from '../../data/artist.json'
import Sidebar from "@/components/Sidebar.vue";
import { RouterLink } from 'vue-router'
import { useSongStore } from "../stores/song.js";
import { storeToRefs } from "pinia";
import MusicPlayer from '@/components/MusicPlayer.vue';
const useSong = useSongStore();
const { isPlaying, currentTrack, currentArtist } = storeToRefs(useSong);

const playFunc = () => {
    if (currentTrack.value) {
        useSong.playOrPauseThisSong(currentArtist.value, currentTrack.value);
        return;
    }
    useSong.playFromFirst();
};
</script>

<template>
    <MusicPlayer v-if="currentTrack"/>
    <Sidebar />
    <div class="ml-60">
        <div class="spotify-playlists">
            <h2>Spotify Playlists</h2>
            <div class="list">
                <RouterLink :to="{ name: 'Playlist' }" class="hover:text-white hover:scale-105 duration-300">
                    <div class="item">
                        <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
                        <div class="play">
                            <span class="fa fa-play"></span>
                        </div>
                        <h4>เพลงไทยฟังประจำ</h4>
                        <p>Rema & Selena Gomez are on top of the...</p>
                    </div>
                </RouterLink>
                <RouterLink :to="{ name: 'Playlist' }" class="hover:text-white hover:scale-105 duration-300">
                    <div class="item">
                        <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
                        <div class="play">
                            <span class="fa fa-play"></span>
                        </div>
                        <h4>RapCaviar</h4>
                        <p>New Music from Lil Baby, Juice WRLD an...</p>
                    </div>
                </RouterLink>
                <RouterLink :to="{ name: 'Playlist' }" class="hover:text-white hover:scale-105 duration-300">
                    <div class="item">
                        <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
                        <div class="play">
                            <span class="fa fa-play"></span>
                        </div>
                        <h4>All out 2010s</h4>
                        <p>The biggest spmgs pf tje 2010s. Cover:...</p>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>


.spotify-playlists {
    padding: 20px 40px;    
}

.spotify-playlists h2 {
    color: #ffffff;
    font-size: 22px;
    margin-bottom: 20px;
}

.spotify-playlists .list {
    display: flex;
    gap: 20px;
    overflow: hidden;
}

.spotify-playlists .list .item {
    min-width: 140px;
    width: 160px;
    padding: 15px;
    background-color: #181818;
    border-radius: 6px;
    cursor: pointer;
    transition: all ease 0.4s;
}

.spotify-playlists .list .item:hover {
    background-color: #252525;
}

.spotify-playlists .list .item img {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 10px;
}

.spotify-playlists .list .item .play {
    position: relative;
}

.spotify-playlists .list .item .play .fa {
    position: absolute;
    right: 10px;
    top: -60px;
    padding: 18px;
    background-color: #1db954;
    border-radius: 100%;
    opacity: 0;
    transition: all ease 0.4s;
}

.spotify-playlists .list .item:hover .play .fa {
    opacity: 1;
    transform: translateY(-20px);
}

.spotify-playlists .list .item h4 {
    color: #ffffff;
    font-size: 14px;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.spotify-playlists .list .item p {
    color: #989898;
    font-size: 12px;
    line-height: 20px;
    font-weight: 600;
    height: 60px;
}

.spotify-playlists hr {
    margin: 70px 0px 0px;
    border-color: #636363;
}
</style>
