import { createApp } from 'vue'
import App from './App.vue'
import { GIcon } from 'caab-ui'
import '@ggbond-ui/theme-chalk/src/index.scss'
const app = createApp(App)
app.use(GIcon)
app.mount('#app')
