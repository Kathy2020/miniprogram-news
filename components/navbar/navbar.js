// components/navbar/navbar.js
const app = getApp()

Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    navTitle: {
      type: String,
      value: '快读·资讯'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: '',
    titleBarHeight: '',
    showHome: true
  },
  /**
   * 组件所在页面的生命周期
   */
  pageLifetimes:{
    //页面被展示时执行
    show(){
      let pageContext = getCurrentPages()
      if (pageContext.length > 1){
        this.setData({
          showHome: false
        })
        //页面为detail page时修改状态栏颜色
        wx.setNavigationBarColor({
          frontColor: '#000000',
          backgroundColor: '#fff'
        })
      }else{
        this.setData({
          showHome: true
        })
      }
    }
  },
  /**
   * 组件的生命周期
   */
  lifetimes: {
     // 在组件实例进入页面节点树时执行
    attached(){
      this.setData({
        statusBarHeight: app.globalData.statusBarHeight,
        titleBarHeight: app.globalData.titleBarHeight
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 回退
    navBack: () => {
      wx.navigateBack({
        delta: 0
      })
    }
  },
})
