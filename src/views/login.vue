<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- start form -->
      <form @submit.prevent="onSubmit" class="flex flex-col justify-start space-y-6 ">
        <div class="row">
          <label for="email" class="flex flex-col">
            <span class="font-semibold">Email address</span>
          </label>
          <input class="px-4 py-2 rounded-lg border border-blue-200 mt-1 w-full" type="text" id="email" placeholder="Email" />
        </div>
        <div class="row">
          <label for="password" class="flex flex-col">
            <span class="font-semibold">Password </span>
          </label>
          <input class="px-4 py-2 rounded-lg border border-blue-200 mt-1 w-full" type="password" id="password" placeholder="Password" />
        </div>
        
        <div class="row submit">
          <button type="submit" class="py-3 text-center w-full text-white font-bold rounded-lg">Sign in</button>
        </div>
      </form>

      <!-- start direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold"> I'm already a new user. </span>
        <span class="ml-1 font-bold text-blue-700"> <router-link :to="{ name: 'Register', params: {} }"> Sign up</router-link> </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    function onSubmit() {

    }
    return { onSubmit }
  }
}
</script>
