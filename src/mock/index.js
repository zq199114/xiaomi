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
  for (let i = 0; i < 100; i++) {
    let testDataOb = {
      proId: i,
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
      phone_name: '红米Note5',
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
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/63bcf275fd8393325c6f343b3c89e5c9.jpg?w=1080&h=1735'
        }, {
          id: '002',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bfb8f59814fa33003e94451eeaba0f9f.jpg?w=1080&h=1397'
        }, {
          id: '003',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/202a31934625738bb2e10dcdd2d28118.jpg?w=1080&h=1800'
        }, {
          id: '004',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60318395fb54759e52b81a6a2364d6b0.jpg?w=1080&h=1651'
        }, {
          id: '005',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/40a4b1aa7d68de23177f74f7f4613001.jpg?w=1080&h=1469'
        }, {
          id: '006',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f3876b42004cfee41a78e9a9aeecc250.jpg?w=1080&h=1401'
        }, {
          id: '007',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0b7d5ffda59b0059fae094b0746c6d07.jpg?w=1080&h=1633'
        }, {
          id: '008',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/228e59bc080960dbe621eca874bc6a2e.jpg?w=1080&h=1864'
        }, {
          id: '009',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5567d33566afa7a64cba33a59e4d60d3.jpg?w=1080&h=1862'
        }, {
          id: '010',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5b01ca1841e7cdb9ecab545d728cee3b.jpg?w=1080&h=966'
        }, {
          id: '011',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b51cbf4618e1d6d30fe16125adec3edc.jpg?w=1080&h=1617'
        }, {
          id: '012',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/798264aa45a5fa6e6644b0bf5fc28157.jpg?w=1080&h=1479'
        }, {
          id: '013',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a27e758bda674993479a6123453b5bfa.jpg?w=1080&h=1084'
        }, {
          id: '014',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8d37ce698ecdc681ba7fd736a7fb1f2c.jpg?w=1080&h=870'
        }, {
          id: '015',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/441e3f68210ae06cc3e76e9e1b0a232d.jpg?w=1080&h=1400'
        }, {
          id: '016',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f97475e0f09e5936f1c5bc9240aed4b0.jpg?w=1080&h=1305'
        }, {
          id: '017',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a6d783f63fec32baeac9635a06fd1b4f.jpg?w=1080&h=2236'
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
