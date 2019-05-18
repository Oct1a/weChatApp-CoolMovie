// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var rp = require('request-promise');


var APIKEY = '0b2bdeda43b5688921839c8ecb20399b'

var tag = 'http://movie.douban.com/j/search_tags'
var subjects = 'http://movie.douban.com/j/search_subjects'

// 云函数入口函数
exports.main = async (event, context) => {

  /**
   *
   * page_limit:显示条数
   * page_start:页数
   *
   */
  // event.tag = encodeURI(encodeURI(event.tag));

  if (event.url == 'tag') {
    url = tag;
  } else {
    url = `${subjects}?type=movie&tag=${event.tag}&sort=recommend&page_limit=${event.limit}&page_start=${event.start}`;
  }
  console.log(url);
  return rp(url)
    .then(function (res) {
      console.log(res)
      return res
    })
    .catch(function (err) {
      console.log(err)
    });
}