import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import config from '../formkit.config';
import { plugin, defaultConfig } from '@formkit/vue'


import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'


import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, fas)

createApp(App)
.use(plugin, defaultConfig(config))
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
