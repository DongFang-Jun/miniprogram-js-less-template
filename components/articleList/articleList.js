// components/articleList/articleList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array
    }
  },



  /**
   * 组件的初始数据
   */
  data: {
    dataList: []
  },

  observers: {
    "list": function (newVal) {
      let temp = JSON.parse(JSON.stringify(newVal)) || []
      if (temp.length) {
        temp.forEach(item => {
          item.imageList = item.image ? item.image.split(',') : []
          item.videoList = item.video ? item.video.split(',') : []
        })
      }
      console.log(temp)
      this.setData({
        dataList: temp
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})