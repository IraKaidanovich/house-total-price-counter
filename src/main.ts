import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin as formkitPlugin, defaultConfig as formkitDefaultConfig } from '@formkit/vue'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.use(
  formkitPlugin,
  formkitDefaultConfig({
    theme: 'genesis'
  })
)

app.mount('#app')
