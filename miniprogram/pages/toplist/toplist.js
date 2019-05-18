// pages/hotlist/hotlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotList: [],
    rank1:'../../images/ranking1.png',
    rank2: '../../images/ranking2.png',
    rank3: '../../images/ranking3.png',
    rank4: '../../images/ranking4.png',

  },

  getTopList: function () {

    wx.showLoading({
      title: '正在拼命加载中....',
    })

    wx.cloud.callFunction({
      name: 'cloud_movie',
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
        wx.hideLoading()
      })
      .catch(err => {
        console.log(err)
        wx.hideLoading()
      })
  },

  gotoDetail(event){
    console.log(event)
    wx.navigateTo({
      url: `../details/details?moveid=${event.target.dataset.id}`
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