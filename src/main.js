import { createApp } from 'vue'
import  { router }  from './routers/router.js'
import App from './App.vue'

import './assets/styles/tailwind.css'
import './assets/styles/global.css'
import createComponent from './utils/import'

const app = createApp(App);
app.use(router)
createComponent(app);
app.mount('#app');
