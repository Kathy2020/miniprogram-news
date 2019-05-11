App({
  onLaunch(){
    wx.getSystemInfo({
      success: res => {
        this.globalData.statusBarHeight = res.statusBarHeight
        this.globalData.titleBarHeight = wx.getMenuButtonBoundingClientRect().bottom + wx.getMenuButtonBoundingClientRect().top - (res.statusBarHeight * 2)
      },
      fail: err=>{
        console.log(err)
      }
    })
  },
  globalData: {
    "statusBarHeight": 0,
    "titleBarHeight": 0
  },
  dateFormat:date=>{
    return `${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`
  }
})