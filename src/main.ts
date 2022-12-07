import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { MyLink, MySelect } from "../modules/my-ui"
import MyUI from "../modules/my-ui"
const app = createApp(App)
// app.use(MyUI)
app.use(MyLink)
app.use(MySelect)

app.mount('#app')
