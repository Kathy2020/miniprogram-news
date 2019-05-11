// pages/detail/detail.js
const app = getApp()

Page({
  data: {
    id: '',
    title: '',
    date: '',
    source: '',
    content: [],
    readCount: '0',
    statusBarHeight: app.globalData.statusBarHeight,
    titleBarHeight: app.globalData.titleBarHeight
  },

  onLoad: function (options) {
      this.setData({
        id: options.id
      })
      this.getDetail()
  },

  getDetail(){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data: {
        id: this.data.id
      },
      success: res => {
        let result = res.data.result
        let date = new Date(result.date) 
        this.setData({
          title:result.title,
          date: app.dateFormat(date),
          source: result.source,
          content: result.content,
          readCount: result.readCount
        })
      }
    })  
  }
})