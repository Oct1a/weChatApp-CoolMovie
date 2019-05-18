// pages/settings/settings.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    id:[]
  },

  // 获取正在上映电影列表
  getSoonList: function () {
    wx.cloud.callFunction({
      name: 'cloud_movie',
      data: {
        url: 'new_movies',
        start: 0,
        count: 1,
      }
    })
      .then(res => {
        // console.log(res)
       var a = JSON.parse(res.result).subjects
       var b = [];
        for (var i = 0; i < a.length;i++){
          //  console.log(a[i].id)
          b.push(a[i].id)
          
        }
        app.globalData.movie_id = b;

      })

  },

  getid:function(){
    // console.log(getApp().globalData.movie_id)
    var list = app.globalData;
    console.log(list.movie_id)
    // for(var i=0;i<list.length;i++){
    //   console.log(list)
    // }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSoonList()
    this.getid()
    
  }

})