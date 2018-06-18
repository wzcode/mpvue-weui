// src/utils/net.js
// import wx from 'wx'; // 引用微信小程序wx对象
import bmobConfig from './config/baseConfig' // bmob配置文件

const net = {
  reqPost(url,data) {
    wx.showLoading({
      title: '加载中'// 数据请求前loading，提高用户体验
    })

    return new Promise((resolve, reject) => {
      console.log('request', wx.getStorageSync('token'));
      wx.request({
        url: bmobConfig.serverUrl + url,
        data: data,
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          // 'X-Bmob-Application-Id': bmobConfig.applicationId,
          // 'X-Bmob-REST-API-Key': bmobConfig.restApiKey,
          'DwbCAccToken': wx.getStorageSync('DwbCAccToken')
        }, // 设置请求的 header
        success: function (res) {
          // success
          wx.hideLoading();
          if (res.statusCode !== 200) {
            wx.showToast({
              title: '网络出错，稍后再试',
              icon: 'none'
            });
            resolve({});
          }
          resolve(res.data);
        },
        fail: function (failerror) {
          // fail
          wx.hideLoading();
          console.log('fail')
          let errorNew = {IsOk: false, Error: {ErrorInfo: '请求失败'}}
          resolve(errorNew) // 请求失败
        },
        complete: function () {
          console.log('complete')
          wx.hideLoading()
        }
      })
    })
  },
  reqGet (url, data) {
    wx.showLoading({
      title: '加载中'// 数据请求前loading，提高用户体验
    })
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: data,
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'X-Bmob-Application-Id': bmobConfig.applicationId,
          'X-Bmob-REST-API-Key': bmobConfig.restApiKey,
          'Content-Type': 'application/json'
        }, // 设置请求的 header
        success: function (res) {
          // success
          wx.hideLoading();
          if (res.statusCode !== 200) {
            wx.showToast({
              title: '网络出错，稍后再试',
              icon: 'none'
            });
            return false;
          }
          resolve(res.data);
        },
        fail: function (failError) {
          // fail
          wx.hideLoading();
          console.log('fail')
          let errorNew = {IsOk: false, Error: {ErrorInfo: '请求失败'}}
          resolve(errorNew) // 请求失败
        },
        complete: function () {
          console.log('complete')
          wx.hideLoading()
        }
      })
    })
  }
}
export default net;// 暴露出来供其他文件引用
