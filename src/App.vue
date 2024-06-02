<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 relative isolate  bg-gray-900 ">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-3xl font-bold leading-7 tracking-tight text-white">Entre na sua conta</h2>
    </div>

     <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
      <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div> 
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" >
        <div>
          <label for="email" class="block text-md font-medium leading-6 text-white">Email</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" v-model="email" autocomplete="email" required class="block w-full rounded-md border-0 pl-2 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
  
        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-white">Senha</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-white">Esqueceu sua senha?</a>
            </div>
          </div>
          <div class="mt-2">
            <input id="password" name="password"  v-model="password" type="password" autocomplete="current-password" required class="block w-full pl-2 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
  
        <div>
          <button type="button" @click="login" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
        </div>
      </form>
  
    </div>
  </div>
</template>

<script setup>
import * as Sentry from "@sentry/vue";
import { ref } from 'vue';
import { useAuth } from './composables/auth';

const email = ref('');
const password = ref('');
const auth = useAuth();

const login = () => {
  // auth.login(email.value, password.value);
  Sentry.captureMessage(`Something went wrong with user ${email.value}`);
}
</script>

<style scoped>

</style>
