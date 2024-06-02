import * as Sentry from "@sentry/vue";
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

const app = createApp(App)
Sentry.init({
  app,
  dsn: "https://59df07361e208b1710de68bb56726bbf@o4507358218158080.ingest.us.sentry.io/4507358220648448",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});


app.mount('#app')
