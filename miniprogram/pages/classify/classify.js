// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    tag:[],
    connect:[],
    limit: 20,
    className:null 
  },

  onClick(event) {
    console.log(event.detail.index) //tab标签index值
    console.log(event.detail.title) //tab标签title值
    wx.showLoading({
      title: '请稍后...',
    })
    wx.cloud.callFunction({
      name: 'cloud_class',
      data: {
        url: 'seach',
        tag: encodeURI(event.detail.title),
        limit: this.data.limit,
        start: 0,
      }
    })
      .then(res => {
        // console.log(res.result)
        this.setData({
          connect: JSON.parse(res.result).subjects,
          className: event.detail.title  // 点击后获取分类名，用于下拉取值
        })
        wx.hideLoading()
      })
      .catch(err => {
        console.log(err)
        wx.hideLoading()
      })
  },

  /**
   * 获取分类标签名称
   */

  getTag: function () {

    wx.cloud.callFunction({
      name: 'cloud_class',
      data:{
        url:'tag'
      }
    })
      .then(res => {
        console.log(res.result)
        this.setData({
          tag: this.data.tag.concat(JSON.parse(res.result).tags),
        })
      })
      .catch(err => {
        console.log(err)

      })

  },

  getActive:function(){
    // 首次进入渲染
    wx.showLoading({
      title: '请稍后...',
    })
    wx.cloud.callFunction({
      name: 'cloud_class',
      data: {
        url: 'seach',
        tag: encodeURI('热门'),
        limit: this.data.limit,
        start: 0,
      }
    }).then(res => {
      // console.log(res.result)
      this.setData({
        connect: JSON.parse(res.result).subjects,
        className: '热门' // 首页进入直接获取分类名，用于下拉取值
      })
      wx.hideLoading()
    })
      .catch(err => {
        console.log(err)
        wx.hideLoading()
      })

  },


  // 下拉添加渲染
  getMore: function () {
    wx.showLoading({
      title: '请稍后...',
    })
    wx.cloud.callFunction({
      name: 'cloud_class',
      data: {
        url: 'seach',
        tag: encodeURI(this.data.className),
        limit: this.data.limit,
        start: this.data.limit,
      }
    }).then(res => {
      this.setData({
        connect: this.data.connect.concat(JSON.parse(res.result).subjects)
      })
      wx.hideLoading()
    })

  },

  // 跳转影片详情页
  godetail: function (event) {
    // console.log(event),
      wx.navigateTo({
        url: `../details/details?moveid=${event.target.dataset.id}`
      })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTag() //取得标签名
    console.log(this.data.tag)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    this.getActive() //首次加载内容
    

  },



  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 添加每页的条数
    this.setData({
      limit:this.data.limit + 20
    })
    // concat添加
    this.getMore()
  },

})