// pages/hotlist/hotlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotList: [],
  },

  getTopList: function () {
    wx.showToast({
      title: '拼命加载中',
      icon: 'success',
    })
    wx.cloud.callFunction({
      name: 'movie_top',
      data: {
        url: 'top',
        start: this.data.hotList.length,
        count:20
      }
    })
      .then(res => {
        this.setData({
          hotList: this.data.hotList.concat(JSON.parse(res.result).subjects
          )
        })
        wx.hideToast()
      })
      .catch(err => {
        console.log(err)
        wx.hideToast()
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTopList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.topList)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
 * 页面上拉触底事件的处理函数
 */
  onReachBottom: function () {
    this.getTopList()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.getTopList()
  },

})