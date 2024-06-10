import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import 'vue-global-api/ref'

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app')
