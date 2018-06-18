
import ajax from '@/vue/plugins/axiosNew'

import * as uri from './uri/loginUri'

class UserLoginApi {

 loginByAccountApi (userName,passWord) {
   let para = {UserName: userName, PassWord: passWord };
   return ajax.reqPost(uri.login,para)
 }

  /**
   * 登陆后的操作
   * @param res
   */
  loginAfter (res) {
    console.log('本地存储',res)
    wx.setStorageSync('DwbCAccToken', res.Token)
    console.log('cunchu 获取 ', wx.getStorageSync('DwbCAccToken'))
  }
}

const api = new UserLoginApi();
export default api;
