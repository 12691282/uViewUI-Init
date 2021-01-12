import Vue from 'vue'
import App from './App'

//引入 uView 
import uView from "uview-ui";
Vue.use(uView);


Vue.config.productionTip = false
Vue.prototype.globalData = { userInfo: null, userlogin: false }
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
