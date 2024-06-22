import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin as formkitPlugin, defaultConfig as formkitDefaultConfig } from '@formkit/vue'
import { createProPlugin as formkitCreateProPlugin, repeater } from '@formkit/pro'
import App from './App.vue'
import '@formkit/themes/genesis'
import '@formkit/pro/genesis'

const app = createApp(App)

app.use(createPinia())

const formkitLicenceKey = 'fk-2a830ba0d'
const formkitPro = formkitCreateProPlugin(formkitLicenceKey, {
  repeater
})
app.use(
  formkitPlugin,
  formkitDefaultConfig({
    theme: 'genesis',
    plugins: [formkitPro]
  })
)

app.mount('#app')
