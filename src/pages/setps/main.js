
import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

// export default {
//   config: {
//     backgroundTextStyle: 'light',
//     navigationBarBackgroundColor: '#000000',
//     navigationBarTitleText: '自定义标题',
//     navigationBarTextStyle: 'black'
//   }
// }

export default {
  config: {
    navigationBarTitleText: '查看启动日志'
  }
}
