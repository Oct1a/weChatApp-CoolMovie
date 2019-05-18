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
      name: 'cloud_movie',
      data: {
        url:'detail',
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


  
})