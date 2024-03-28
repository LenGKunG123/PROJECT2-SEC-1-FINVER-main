import { defineStore } from 'pinia'
import { getSongs } from "@/libs/fetchUtils";

export const useSongStore = defineStore('song', {
  state: () => ({
    isPlaying: false,
    audio: null,
    currentArtist: null,
    currentTrack: null,
    artist: null // Add artist state to store the fetched data
  }),
  actions: {
    // Fetch data when the store is initialized
    async onInit() {
      try {
        this.artist = await getSongs('http://localhost:5000/albums');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },

    loadSong(artist, track) {
        this.currentArtist = artist
        this.currentTrack = track

        if (this.audio && this.audio.src) {
            this.audio.pause()
            this.isPlaying = false
            this.audio.src = ''
        }

        this.audio = new Audio()
        this.audio.src = track.path

        setTimeout(() => {
            this.isPlaying = true
            this.audio.play()
        }, 200)
    },

    playOrPauseSong() {
        if (this.audio.paused) {
            this.isPlaying = true
            this.audio.play()
        } else {
            this.isPlaying = false
            this.audio.pause()
        }
    },

    playOrPauseThisSong(artist, track) {
        if (!this.audio || !this.audio.src || (this.currentTrack.id !== track.id)) {
            this.loadSong(artist, track)
            return
        }

        this.playOrPauseSong()
    },

    prevSong(currentTrack) {
        let track = this.artist.album1.tracks[currentTrack.id - 2]
        this.loadSong(this.artist, track)
    },

    nextSong(currentTrack) {
        if (currentTrack.id === album1.tracks.length) {
            let track = album1.tracks[0]
            this.loadSong(album1, track)
        } else {
            let track = album1.tracks[currentTrack.id]
            this.loadSong(album1, track)
        }
    },

    playFromFirst() {
        this.resetState()
        let track = this.album1.tracks[0]
        this.loadSong(this.album1, track)
    },

    resetState() {
        this.isPlaying = false
        this.audio = null
        this.currentArtist = null
        this.currentTrack = null
    }
  },
  persist: true
})
