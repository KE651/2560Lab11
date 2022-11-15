import { createApp } from 'vue'
console.log("createApp main.js")

import App from './App.vue'
console.log("import App main.js")

import HelloAPI from '@/services/HelloAPI'
// @ is shorthand for src directory of Vue
console.log("Import HelloAPI from @...main.js")

let app = createApp(App)
// the .mount statement was originally included above
console.log("createApp main.js")

app.config.globalProperties.$hello_api = HelloAPI
// make API functions available anywhere in the Vue app as this.$hello_api.getHelloMessage()
console.log("app.config.globalProperties main.js")

app.mount('#app')
// this is the first file that runs
console.log("app.mount main.js")