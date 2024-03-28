<script setup>
import CategorySelect from "../components/CategorySelect.vue"
import Searchbar from "@/components/Searchbar.vue"
import Sidebar from '../components/Sidebar.vue'
</script>

<template>
  <Sidebar/>
  <div class="ml-60">
      <div class="flex flex-end items-center gap-2">
        <Searchbar />
        
      </div>
      <div class="px-8 mt-10 pb-10">
        <div
          class="text-white text-3xl font-semibold px-3 py-3"
        >
          Browse all
        </div>
        <div
          class="mt-10 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6"
        >
          <CategorySelect
            category="Music"
            image="https://cdn.pixabay.com/photo/2015/07/31/15/01/girl-869213_1280.jpg"
            class="bg-red-500 rounded-xl"
          />
          <CategorySelect
            category="Podcasts"
            image="https://cdn.pixabay.com/photo/2017/08/10/04/17/microphone-2618102_1280.jpg"
            class="bg-blue-500 rounded-xl"
          />
          <CategorySelect
            category="Made For You"
            image="https://cdn.pixabay.com/photo/2014/04/05/11/28/index-315754_1280.jpg"
            class="bg-green-500 rounded-xl"
          />
          <CategorySelect
            category="New Release"
            image="https://cdn.pixabay.com/photo/2017/04/10/16/55/live-music-2219036_1280.jpg"
            class="bg-purple-500 rounded-xl"
          />
          <CategorySelect
            category="Thai Song"
            image="https://s3-ap-southeast-1.amazonaws.com/wpimage.powermag.kingpower.com/wp-content/uploads/2022/09/10233815/BG-Head_1920x1280px-Desktop.jpg"
            class="bg-pink-500 rounded-xl"
          />
          <CategorySelect
            category="Pop"
            image="https://i.ytimg.com/vi/ic8j13piAhQ/maxresdefault.jpg"
            class="bg-emerald-500 rounded-xl"
          />
          <CategorySelect
            category="K-Pop"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfBZlcFg-xMv9QlvZj7P1A-XY8RQVA0yzo5-WAhEGiQ&s"
            class="bg-indigo-500 rounded-xl"
          />
          <CategorySelect
            category="Hip-Hop"
            image="https://media.npr.org/assets/img/2021/11/16/gettyimages-1235223332_sq-018166785ff8ed3e47c6e014e0f58618be107ddf.jpg"
            class="bg-cyan-500 rounded-xl"
          />
          <CategorySelect
            category="Folk & Acoustic"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRml05-wxBw2Z9XZMlfrPV0Bj8yXtVSSMBsqe_jt1BGGQ&s"
            class="bg-teal-500 rounded-xl"
          />
          <CategorySelect
            category="Love"
            image="https://i.scdn.co/image/ab67616d0000b2736b4a421c60d5c5c17a4f56c0"
            class="bg-lime-500 rounded-xl"
            
          />
          <CategorySelect
            category="R&B"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT14uq52fFOS46lO_pPd46rhxRpVSuP4ehVtgN6Mt7mGg&s"
            class="bg-yellow-500 rounded-xl"
          />
          <CategorySelect
            category="Rock"
            image="https://f.ptcdn.info/614/022/000/1408704242-2550913465-o.jpg"
            class="bg-pink-500 rounded-xl"
          />
          <CategorySelect
            category="Dance/Electronic"
            image="https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2018-03/1f193ea1be6ff6877e025ed15bc58e04.jpeg?h=2e3eca71&itok=9PJ7t-bf"
            class="bg-orange-500 rounded-xl"
          />
          <CategorySelect
            category="Mood"
            image="https://yt3.googleusercontent.com/fbMZWmMgDXCKOw8qqJmpiQstqXLc-_jczRUHIXTSovZrfoAf5W1vpjnnfQaBUZf1_BKxBAh34Q=s900-c-k-c0x00ffffff-no-rj"
            class="bg-stone-300 rounded-xl"
          />
          <CategorySelect
            category="Discover"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6PIIuDGxfY9dipoX0K3q7foN4akxHHawskO8H9d8Y0hII3kwMX5ZaNcus0lj6JDvRtI&usqp=CAU"
            class="bg-gray-500 rounded-xl"
          />
         
         
          
          
         
          
        </div>
      </div>
    </div>
</template>

<style scoped></style>
