<script>
  // export default {
  //   setup() {
  //     const handleSubmit = (event) => {
  //       // Handle form submission here
  //       console.log('Form submitted');
  //     };
  
  //     return {
  //       handleSubmit
  //     };
  //   }
  // };
  </script>
<template>
    <div class="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8 border-[8px] drop-shadow-[100px_50px_100px_rgba(100,225,100,1)] border-white rounded-lg p-12 bg-gradient-to-r from-[#f98ee5] to-[#509bf5]">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-white">
            Sign up for an account
          </h2>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="username" class="sr-only">Username</label>
              <input id="username" name="username" required
                     class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Username">
            </div>
            &nbsp;
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" required
                     class="appearance-none rounded relative block w-full px-3 py-2 border  border-gray-300 placeholder-gray-500 text-black rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Password" type="password">
            </div>
            &nbsp;
            <div>
              <label for="con-password" class="sr-only">Password</label>
              <input id="con-password" name="con-password" required
                     class="appearance-none rounded relative block w-full px-3 py-2 border  border-gray-300 placeholder-gray-500 text-black rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Confirm Password" type="password">
            </div>
          </div>
          <div>
           <RouterLink :to="{name:'Login'}">
              <button type="submit"
                      class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign up
              </button>
            </RouterLink>
            <RouterLink :to="{name:'Login'}">
                <button class="text-black cursor-pointer py-5">
                Already have account? <span class="underline underline-offset-1">Login</span> here 
                </button>
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
  </template>
  <style>
  /* Tailwind styles can be directly used here */
  </style>
  