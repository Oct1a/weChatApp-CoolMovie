// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var rp = require('request-promise');

var urls = {
  'top': 'http://api.douban.com/v2/movie/top250', //Top250
  'list': 'http://api.douban.com/v2/movie/in_theaters', //正在热映
  'weekly':'http://api.douban.com/v2/movie/weekly' //口碑榜
}


var APIKEY = '0b2bdeda43b5688921839c8ecb20399b'

// 云函数入口函数
exports.main = async (event, context) => {

  /**
   *
   * apikey：固定值 0b2bdeda43b5688921839c8ecb20399b
   * city：所在城市，例如北京、上海等
   * start：分页使用，表示第几页
   * count：分页使用，表示数量
   * client：客户端信息。可为空
   * udid：用户 id。可为空
   *
   */

  return rp(`${urls[event.url]}?apikey=${APIKEY}&city=${event.city}&start=${event.start}&count=${event.count}&client=&udid=`)
      .then(function (res) {
        console.log(res)
        return res
      })
      .catch(function (err) {
        console.log(err)
      });
  }