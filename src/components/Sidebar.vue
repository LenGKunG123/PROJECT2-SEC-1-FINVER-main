<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
	<div class="fixed left-0 top-0 bottom-0 w-[215px] p-6 bg-black z-0">
		<div class="logo">
				<img src="/public/images/logo/BeatBuddy.png"
					width="130px" alt="Logo" />
		</div>
		<div class="list-none mt-5">
			<ul class="text-slate-300 font-semibold text-[16px]">
				<li class="py-3">
					<RouterLink :to="{name:'Home'}" class="hover:text-white hover:p-2 duration-100">
						<span class="fa fa-home text-[20px] mr-3"></span>
						<span>Home</span>
					</RouterLink>
				</li>

				<li class="py-3">
					<RouterLink :to="{name:'SearchPage'}" class="hover:text-white hover:p-2 duration-100">
						<span class="fa fa-search text-[20px] mr-3"></span>
						<span>Search</span>
					</RouterLink>
				</li>

				<li class="py-3">
					<RouterLink :to="{name:'Library'}" class="hover:text-white hover:p-2 duration-100">
						<span class="fa fas fa-book text-[20px] mr-3"></span>
						<span>Your Library</span>
					</RouterLink>
				</li>

				<li class="py-3">
					<RouterLink :to="{name:'CreatePlaylist'}" class="hover:text-white hover:p-2 duration-100">
						<span class="fa fas fa-plus-square text-[20px] mr-3"></span>
						<span>Create Playlist</span>
					</RouterLink>
				</li>

				<li class="py-3">
					<a href="#" class="hover:text-white hover:p-2 duration-100">
						<span class="fa fas fa-heart text-[20px] mr-3"></span>
						<span>Liked Songs</span>
					</a>
				</li>
				
			</ul>
		</div>

		<div class="absolute bottom-[100px]">
			<ul class="list-none font-normal text-[13px] text-gray-300 gap-5">
				<li class="pb-1">
					<a href="#" class="hover:underline">Cookies</a>
				</li>
				<li class="pb-1">
					<a href="#" class="hover:underline">Privacy</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
    
    font-family: "Poppins", sans-serif;
}
</style>
