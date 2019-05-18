//app.js
App({
  onLaunch: function () {
    // 动态设置tabbar
    
    // wx.setTabBarBadge({
    //   index: 0,
    //   text: '1'
    // })

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {
      'movie_id':null,
    }
  }
})
