<script setup>
import { ref, onMounted } from "vue"
import Sidebar from "../components/Sidebar.vue"
import { addItem, fetchData } from "../libs/fetchUtils.js"

const playlists = ref([]) // Define a ref for playlists
const playlistName = ref("")
const playlistDescription = ref("")
const playlistImage = ref(null) // Reference for uploaded image file

// Modal and Edit playlist 
const showModal = ref(false)
const editingPlaylist = ref({ name: "", description: "" })

const openModalToEdit = (playlist) => {
  editingPlaylist.value = { ...playlist }
  showModal.value = true
}

const closeModal = () => {
  editingPlaylist.value = { name: "", description: "" }
  showModal.value = false
}

// Create a new playlist
const createPlaylist = async () => {
  try {
    const newPlaylist = {
      name: playlistName.value,
      description: playlistDescription.value,
    }
    await addItem("http://localhost:5002/playlists", newPlaylist)
    await showPlaylist() // After creating playlist, update playlist data
    // Clear input fields
    playlistName.value = ""
    playlistDescription.value = ""
    playlistImage.value = null
  } catch (error) {
    console.error("Error creating playlist:", error)
  }
}

// Show all playlists
const showPlaylist = async () => {
  try {
    const data = await fetchData("http://localhost:50002/playlists")
    if (data) {
      playlists.value = data // Update playlists data
      console.log("Fetched data:", data.playlists)
      console.log("Updated playlists:", playlists.value)
    }
  } catch (error) {
    console.error("Error showing playlist:", error)
  }
}

onMounted(showPlaylist) // Call showPlaylist when the component is mounted

const updatePlaylist = async () =>{
  try {
    const response = await fetch(
      `http://localhost:5002/playlists/${editingPlaylist.value.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: editingPlaylist.value.name,
          description: editingPlaylist.value.description,
        }),
      }
    )
    if (!response.ok) {
      throw new Error("Failed to update playlist")
    }
    // Fetch the updated playlist data after the update
    await showPlaylist()
    closeModal()
  } catch (error) {
    console.error("Error updating playlist:", error)
  }
}

//Delete a playlist
// const removeTodo = async (removeId) => {
//   try{
//     const removestatus = await deleteItemById("http://localhost:5002/playlists",removeId)
//   if (removestatus === 200) {
//     myTodos.value.removeTodo(removeId)
//     }
//   }catch (error) {
//     console.error("Error showing playlist:", error)
//   }
// }
</script>

<template>
  <Sidebar />
  <div class="bg-gradient-to-b from-stone-900 to-stone-900">
    <div class="ml-60 pt-6 pb-8">
      <h1 class="text-2xl font-semibold py-2">Create Playlist</h1>
      <div class="flex gap-3 cursor-pointer">
        <img
          class="max-w-[150px] hover:"
          src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db"
        />
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
              required
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
      </div>
    </div>

    <!-- Display all playlists -->
    <div class="pl-60 bg-stone-950">
      <h2 class="text-2xl font-semibold py-1">Playlists</h2>
      <div>
        <!-- List of each playlist with the completed tailwind css  -->
        <div
          v-for="(playlist, index) in playlists"
          :key="index"
          class="flex flex-row items-center border border-gray-200 p-4 mb-4 rounded-md shadow-md bg-white hover:shadow-lg transition duration-300 ease-in-out3"
        >
          <h3 class="text-xl font-semibold">{{ playlist.name }}</h3>
          <p class="text-md">{{ playlist.description }}</p>
          <button @click="openModalToEdit(playlist)">Edit</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
    v-if="showModal"
  >
    <div class="bg-white p-8 rounded-lg w-80">
      <h2 class="text-lg font-semibold mb-4">Edit Playlist</h2>
      <form @submit.prevent="updatePlaylist">
        <div class="mb-4">
          <label
            for="editPlaylistImage"
            class="block text-sm font-medium text-gray-700"
            >Image:</label
          >
          <!-- Input for editing the playlist image -->
          <input
            type="file"
            id="editPlaylistImage"
            accept="image/*"
            @change="handleImageChange"
          />
          <img
            v-if="editingPlaylist.image"
            :src="editingPlaylist.image"
            alt="Playlist Image"
            class="mt-1 w-full h-32 object-cover rounded-md"
          />
        </div>
        <div class="mb-4">
          <label
            for="editPlaylistName"
            class="block text-sm font-medium text-gray-700"
            >Name:</label
          >
          <!-- Input for editing the playlist name -->
          <input
            type="text"
            id="editPlaylistName"
            v-model="editingPlaylist.name"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div class="mb-4">
          <label
            for="editPlaylistDescription"
            class="block text-sm font-medium text-gray-700"
            >Description:</label
          >
          <!-- Input for editing the playlist description -->
          <textarea
            id="editPlaylistDescription"
            v-model="editingPlaylist.description"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div class="flex justify-end">
          <button type="submit" class="mr-2">Save</button>
          <button type="button" @click="closeModal">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
