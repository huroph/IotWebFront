import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'vuetify/styles'
import { loadFonts } from './plugins/webfontloader'
import {store} from "@/store/store";
import VueSweetalert2 from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

loadFonts()
createApp(App)
    .use(router)
    .use(vuetify)
    .use(store)
    .use(VueSweetalert2)
    .component('EasyDataTable', Vue3EasyDataTable)
    .mount('#app')
