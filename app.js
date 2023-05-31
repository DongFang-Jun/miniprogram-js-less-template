import {
  STORAGE_KEY
} from "./libs/config"
import {
  getStorage,
  setStorage
} from "./utils/util"

// app.js
App({
  onLaunch() {

    //存储本机信息
    let systemInfo = getStorage(STORAGE_KEY.systemInfo)
    if (!systemInfo) {
      this.setSystemInfo()
    }

  },

  //存储本机信息
  setSystemInfo() {
    wx.getSystemInfo({
      success: res => {
        setStorage(STORAGE_KEY.systemInfo, JSON.stringify(res))
      }
    })
  },
  globalData: {}
})