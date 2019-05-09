// pages/detail/detail.js
Page({
  data: {
    id: '',
    title: '',
    date: '',
    source: '',
    content: [],
    readCount: '0'
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
        console.log(result)
        let date = new Date(result.date) 
        this.setData({
          title:result.title,
          date: `${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`,
          source: result.source,
          content: result.content,
          readCount: result.readCount
        })
      }
    })  
  }
})