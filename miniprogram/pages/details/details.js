// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datails: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 添加云函数
    // 获取值
    // 返回值
    // 输出详情信息

    console.log(options)

    wx.showLoading({
      title: '正在加载中....',
    })
    wx.cloud.callFunction({
      name: 'movie_detail',
      data: {
        moveid:options.moveid,
      }
    })
    .then(res => {
      console.log(res)
      this.setData({
        datails: this.data.datails.concat(JSON.parse(res.result))
      })
      wx.hideLoading()
    })
    .catch(err => {
      console.log(err)
      wx.hideLoading()
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})