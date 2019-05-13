// pages/movie/movie.js

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    hotList:[],
    newList:[],
    soonList:[]
  },

  getHotList:function(){
    wx.showLoading({
      title: '正在拼命加载中....',
    })

    wx.cloud.callFunction({
      name: 'movie_list',
      data: {
        start: this.data.hotList.length,
        count: 10,
      }
    })
      .then(res => {
        // console.log(res)
        this.setData({
          hotList: this.data.hotList.concat(JSON.parse(res.result).subjects
          )
        })
        wx.hideLoading()
      })
      .catch(err => {
        console.log(err)
        wx.hideLoading()
      })
  },

  // 获取正在上映电影列表
  getSoonList:function(){
    wx.cloud.callFunction({
      name: 'movie_soon',
      data: {
        start: this.data.soonList.length,
        count: 10,
      }
    })
      .then(res => {
        console.log(res)
        this.setData({
          soonList: this.data.soonList.concat(JSON.parse(res.result).subjects)
        })
        
      })
      .catch(err => {
        console.log(err)
        wx.hideLoading()
      })
  },






  godetail:function(event){
    console.log(event.target.dataset.id),
    wx.navigateTo({
      url: `../details/details?moveid=${event.target.dataset.id}`
    })
  },

  /* 这里实现控制中间凸显图片的样式 */
  handleChange: function (e) {
    this.setData({
      currentIndex: e.detail.current
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHotList()
    this.getSoonList()

    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getHotList()
  },


})