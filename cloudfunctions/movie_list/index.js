// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var rp = require('request-promise');

// 云函数入口函数
exports.main = async (event, context) => {
  return rp(`http://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&start=${event.start}&count=${event.count}`)
    .then(function (res) {
      console.log(res)
      return res
    })
    .catch(function (err) {
      console.log(err)
    });
}