<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 relative isolate  bg-gray-900 ">
  <div class="inline-flex rounded-md shadow-sm justify-center" role="group">
    <button type="button" @click="errorWithScope('error')" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
      Error
    </button>
    <button type="button" @click="errorWithScope('fatal')" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
      Fatal
    </button>
    <button type="button" @click="errorWithScope('debug')" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-l border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
      Debug
    </button>
    <button type="button" @click="logout" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
      Logout
    </button>
  </div>
</div>
</template>

<script setup lang="ts">
import * as Sentry from "@sentry/vue";
import { useAuth } from '../composables/auth';

const auth = useAuth();

const logout = () => {
  auth.logout();
}

const errorWithScope = (level: 'error' | 'fatal' | 'debug') => {
    try {
      throw {
        statusCode: 400,
        message: 'error with scope sent',
      }
    } catch (err: any) {
      Sentry.withScope(function (scope) {
        scope.setLevel(level)
        scope.setFingerprint(['errorWithScope', window.location.pathname, err.satusCode]);
        Sentry.captureException(err, {
          tags: {
            level,
          }
        });
      });
    }
  }
</script>



