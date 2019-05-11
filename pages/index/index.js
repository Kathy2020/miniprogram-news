//index.js
const app = getApp()

const typeMap = {
  '国内': 'gn',
  '国际': 'gj',
  '财经': 'cj',
  '娱乐': 'yl',
  '军事': 'js',
  '体育': 'ty',
  '其它': 'other',
}

Page({
  data: {
    typeList: ['国内','国际','财经','娱乐','军事','体育','其它'],
    type: 'gn',
    mapType: '国内',
    newsList: [],
    statusBarHeight: app.globalData.statusBarHeight,
    titleBarHeight: app.globalData.titleBarHeight
  },
  onLoad(){
    this.getNews()
  },
  
  onPullDownRefresh(){
    this.getNews(()=>{
      wx.stopPullDownRefresh()
    })
  },

  getNews(callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: this.data.type
      },
      success: res => {
        let result = res.data.result
        this.setNewsList(result)
      },
      complete: ()=>{
        callback && callback()
      }
    })
  },

  setNewsList(result){
    let newsList = []
    let len = result.length
    for(let i = 0; i < len; i++){
      let date = new Date(result[i].date)
      // console.log(date.toLocaleTimeString())
      newsList.push({
        id: result[i].id,
        title: result[i].title,
        source: result[i].source,
        date: app.dateFormat(date),
        imgPath: result[i].firstImage
      })
    }
    this.setData({
      newsList: newsList
    })
  },
  //选择新闻类别
  onTapType(event){
    let type = event.currentTarget.dataset.item
    if(typeMap[type]!== this.data.type){
      this.setData({
        type: typeMap[type],
        mapType: type
      })
      this.getNews()
    }
  },
  //进入详情页
  onTapNews(event){
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
    })
  }
})
