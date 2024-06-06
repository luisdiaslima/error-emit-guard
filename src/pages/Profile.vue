<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 relative isolate  bg-gray-900 ">
  <div class="inline-flex rounded-md shadow-sm justify-center" role="group">
    <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
      Emitir Erro
    </button>
    <button type="button" @click="sendInvite" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
      Marcar um encontro 💗
    </button>
    <button type="button" @click="logout" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
      Sair
    </button>
  </div>
</div>
</template>

<script setup>
import { useAuth } from '../composables/auth';

const auth = useAuth();

const logout = () => {
  auth.logout();
}

const sendInvite = () => {
  window.location.href = 'https://api.whatsapp.com/send?phone=5535997411469&text=oi%20amor,%20vc%20t%C3%A1%20livre%20sexta%20%C3%A1%20noite???%20%F0%9F%92%97%E2%9D%A4%EF%B8%8F%F0%9F%92%97'
}
</script>



