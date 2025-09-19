import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-8I_HmAlmgY_MK3yJxbx127ogtxVTlSQ",
    authDomain: "fit5032-week7-9ab34.firebaseapp.com",
    projectId: "fit5032-week7-9ab34",
    storageBucket: "fit5032-week7-9ab34.firebasestorage.app",
    messagingSenderId: "494908130901",
    appId: "1:494908130901:web:48cf916d1723bd114bb6dc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')
