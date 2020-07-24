import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import {store} from './store'
import {layout} from './layout'
import './meddleware/beforeEach'
import './config/iview'
import './plugins/mixins'
import './assets/styles/index.less'
import 'view-design/dist/styles/iview.css'

Vue.use(layout)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
