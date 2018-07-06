import Mock from 'mockjs'
const Random = Mock.Random
// mock一组数据
// const produceNewsData = function () {
//   let articles = []
//   for (let i = 0; i < 100; i++) {
//     let newArticleObject = {
//       title: Random.csentence(5, 30), //  Random.csentence( min, max )
//       thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
//       author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
//       date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
//     }
//     articles.push(newArticleObject)
//   }
//
//   return {
//     articles: articles
//   }
// }

const testData = function () {
  let testdataArr = []
  for (let i = 0; i < 19; i++) {
    let rename = Random.word() // 如果写在循环 外面 那 每个值都一样了
    let testDataOb = {
      proId: i,
      phone_name: rename,
      imgRes: [{
        imgUrl: Random.image('729x792'),
        id: '001'
      }, {
        imgUrl: Random.image('729x792'),
        id: '002'
      }, {
        imgUrl: Random.image('729x792'),
        id: '003'
      }, {
        imgUrl: Random.image('729x792'),
        id: '004'
      }],
      version: {
        version_item: [{
          id: 'v001',
          name: '3GB+32GB 全网通',
          price: '1099'
        }, {
          id: 'v002',
          name: '4GB+64GB 全网通',
          price: '1099'
        }, {
          id: 'v003',
          name: '6GB+64GB 全网通',
          price: '1699'
        }, {
          id: 'v004',
          name: '4GB+64GB 移动4G+',
          price: '1399'
        }],
        color: [{
          id: 'c001',
          name: '金色',
          imgUrl: 'https://i8.mifile.cn/a1/pms_1521165504.49423605!720x7200.jpg'
        }, {
          id: 'c002',
          name: '黑色',
          imgUrl: 'https://i8.mifile.cn/a1/pms_1521165496.26763454!720x7200.jpg'
        }, {
          id: 'c003',
          name: '玫瑰金',
          imgUrl: 'https://i8.mifile.cn/a1/pms_1521165501.80114213!720x7200.jpg'
        }, {
          id: 'c004',
          name: '魔力蓝',
          imgUrl: 'https://i8.mifile.cn/a1/pms_1521165508.28626332!720x7200.jpg'
        }]
      },
      gift: [{
        id: '001',
        name: '赠米粉卡'
      }, {
        id: '002',
        name: '赠保护膜'
      }, {
        id: '003',
        name: '赠保护壳'
      }],
      imgStore: [
        {
          id: '001',
          imgUrl: Random.image('1080x1397')
        }, {
          id: '002',
          imgUrl: Random.image('1080x1397')
        }, {
          id: '003',
          imgUrl: Random.image('1080x1397')
        }, {
          id: '004',
          imgUrl: Random.image('1080x1397')
        }, {
          id: '005',
          imgUrl: Random.image('1080x1397')
        }, {
          id: '006',
          imgUrl: Random.image('1080x1397')
        }, {
          id: '007',
          imgUrl: Random.image('1080x1397')
        }, {
          id: '008',
          imgUrl: Random.image('1080x1397')
        }, {
          id: '009',
          imgUrl: Random.image('1080x1397')
        }, {
          id: '010',
          imgUrl: Random.image('1080x1397')
        }, {
          id: '011',
          imgUrl: Random.image('1080x1397')
        }, {
          id: '012',
          imgUrl: Random.image('1080x1397')
        }, {
          id: '013',
          imgUrl: Random.image('1080x1397')
        }, {
          id: '014',
          imgUrl: Random.image('1080x1397')
        }, {
          id: '015',
          imgUrl: Random.image('1080x1397')
        }, {
          id: '016',
          imgUrl: Random.image('1080x1397')
        }, {
          id: '017',
          imgUrl: Random.image('1080x1397')
        }
      ]
    }
    testdataArr.push(testDataOb)
  }
  return testdataArr
}

const column = function () {
  let data = []
  for (let i = 0; i < 25; i++) {
    let rename = Random.cname()
    let item = {
      id: i,
      name: rename,
      rlist: {
        titleImg: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/711275806886438be20e33ec943a904a.jpg?thumb=1&w=500&h=200',
        title: rename,
        listItem: [{
          id: 1,
          imgUrl: 'https://i8.mifile.cn/b2c-mimall-media/06cabb01bbe4ac5c819ee101e4446a16!120x120.png',
          name: '小米8'
        }, {
          id: 2,
          imgUrl: 'https://i8.mifile.cn/b2c-mimall-media/06cabb01bbe4ac5c819ee101e4446a16!120x120.png',
          name: '小米8'
        }, {
          id: 3,
          imgUrl: 'https://i8.mifile.cn/b2c-mimall-media/06cabb01bbe4ac5c819ee101e4446a16!120x120.png',
          name: '小米8'
        }, {
          id: 4,
          imgUrl: 'https://i8.mifile.cn/b2c-mimall-media/06cabb01bbe4ac5c819ee101e4446a16!120x120.png',
          name: '小米8'
        }, {
          id: 5,
          imgUrl: 'https://i8.mifile.cn/b2c-mimall-media/06cabb01bbe4ac5c819ee101e4446a16!120x120.png',
          name: '小米8'
        }, {
          id: 6,
          imgUrl: 'https://i8.mifile.cn/b2c-mimall-media/06cabb01bbe4ac5c819ee101e4446a16!120x120.png',
          name: '小米8'
        }]
      }
    }
    data.push(item)
  }
  return data
}
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', testData)
Mock.mock('/list/item', 'get', column)
/*
* 轮播图 4张 imgRes->id,imgUrl
* 版本 version->version_item->id,name,price  数量4
* 颜色          color->id->id,name.imgUrl
* 赠品  gift->id,name
* 手机名字 phone_name
* 概述 imgStore->id,imgUrl
 */
