/* 轻提示 */
export const showMsg = (message, icon = 'none') => {
  wx.showToast({
    title: message,
    icon,
    mask: true,
    duration: 2000
  })
}

/* 存储本地信息 */
export const setStorage = (key, value) => {
  wx.setStorageSync(key, value)
}

/* 移除本地信息 */
export const removeStorage = (key) => {
  wx.removeStorageSync(key)
}

/* 获取本地信息 */
export const getStorage = (key) => {
  return wx.getStorageInfoSync(key) || ''
}