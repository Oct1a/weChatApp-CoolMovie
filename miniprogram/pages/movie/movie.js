// pages/movie/movie.js

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    swiperlist:[
      "http://hbimg.b0.upaiyun.com/c47ae636b06071453f6b0272b968509b1c5a6c8091317-XoOmQk_fw658",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557979334593&di=fbd5f8516ecb9cf4c9d39147db09bb6d&imgtype=0&src=http%3A%2F%2Fy0.ifengimg.com%2Fac6206f3ceac7cae%2F2013%2F0926%2Frdn_52437c68500dd.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557979294175&di=56652fe4a86ed2e51465e043fd58bf9c&imgtype=0&src=http%3A%2F%2Fimg1.cache.netease.com%2Fcatchpic%2F1%2F18%2F18D3B0BCE16EF386F6D7B7E37CBD254D.jpg",
      
    ],
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


  /**
   * 
   * 主页跳转链接设置
   * gotoHot:热门
   * gotoNotice：预告
   * gotoTop: 榜单
   * gotoClss:分类
   */
  
  gotoTop:function(){
    wx.navigateTo({
      url: '../hotlist/hotlist',
    })
  },

  gotoClass:function(){
    wx.navigateTo({
      url: '../classify/classify',
    })
  },


  /**
   * 
   * 跳转影片详情
   * 
   */

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