<script setup>

</script>
 
<template>
<div>
    <form
            @submit.prevent="createPlaylist"
            class="flex flex-col gap-2 pb-3 text-start"
          >
            <label for="playlistName">Playlist Name:</label>
            <input
              class="pl-2"
              type="text"
              id="playlistName"
              v-model="playlistName"
            />
            <label for="playlistDescription">Playlist Description:</label>
            <textarea
              id="playlistDescription"
              class="pl-2"
              v-model="playlistDescription"
            ></textarea>
            <button type="submit">Create Playlist</button>
          </form>
</div>
</template>
 
<style scoped>

</style>