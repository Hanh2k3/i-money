<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- start form -->
      <form @submit.prevent="onSubmit" class="flex flex-col justify-start space-y-6 ">
        <div class="row">
          <label for="fullName" class="flex flex-col">
            <span class="font-semibold">Full Name</span>
          </label>
          <input class="px-4 py-2 rounded-lg border border-blue-200 mt-1 w-full" type="text" id="fullName" placeholder="Your name..." v-model="fullName" />
        </div>

        <div class="row">
          <label for="email" class="flex flex-col">
            <span class="font-semibold">Email address</span>
          </label>
          <input class="px-4 py-2 rounded-lg border border-blue-200 mt-1 w-full" type="text" id="email" placeholder="Email" v-model="email" />
        </div>
        <div class="row">
          <label for="password" class="flex flex-col">
            <span class="font-semibold">Password </span>
          </label>
          <input class="px-4 py-2 rounded-lg border border-blue-200 mt-1 w-full" type="password" id="password" placeholder="Password" v-model="password" />
        </div>
        
        <div class="row submit" v-if="!isPending">
          <button type="submit" class="py-3 text-center w-full text-white font-bold rounded-lg">Sign up</button>
        </div>

        <div class="row submit" v-else> 
          <button type="button" class="py-3 text-center w-full text-white font-bold rounded-lg cursor-not-allowed">Loading ...</button>
        </div>

        <div class="row" v-if="error">
          <span class="text-red-600">{{ error }}</span>
        </div>
      </form>
      <!-- start direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold"> I'm already a member. </span>
        <span class="ml-1 font-bold text-blue-700"> <router-link :to="{ name: 'Login', params: {} }"> Sign in</router-link> </span>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useSignup  } from '../composable/useSignup'
export default {
  setup() {
    const fullName = ref("");
    const email = ref("");
    const password = ref("");

    const { error, isPending, signup } = useSignup();
    async function onSubmit() {
      await signup(email.value, password.value, fullName.value)
      if(!error) isPending.value = true; 
    }
    return { onSubmit, fullName, email, password, error, isPending}
  }
}
</script>
