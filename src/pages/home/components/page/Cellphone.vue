<template>
<div class="cellphone" ref="wraper">
  <div>
  <cell-swiper :swiperImg="swiperImg"></cell-swiper>
  <new-product :newProduct="newProduct"></new-product>
  <hot-sale :hotSale=" hotSale"></hot-sale>
  <series :series="series"></series>
  </div>
</div>
</template>

<script>
import cellSwiper from './cellphone/Swiper'
import newProduct from './cellphone/NewProduct'
import hotSale from './cellphone/HotSale'
import series from './cellphone/Series'
import BScroll from 'better-scroll'

export default {
  name: 'HomeCellphone',
  components: {
    cellSwiper,
    newProduct,
    hotSale,
    series
  },
  data () {
    return {
      swiperImg: [
        {
          id: '001',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/85267dab13338062fc3bda2b9fd868a9.jpg?thumb=1&w=720&h=360'
        }, {
          id: '002',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/eab473654d33fc83230aacd71e66e8cf.jpg?thumb=1&w=720&h=360'
        }],
      newProduct: {
        banner: {
          id: '001',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f01fe26d5c7c13cb208cc07afa87a431.jpg?thumb=1&w=720&h=200'
        },
        title: {
          id: '001',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7c0ddda856d45ad15b1dce794c0968ee.png?thumb=1&w=720&h=80'
        },
        item: [{
          id: '001',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/53d32c5e55cba00b473b48908c571f02.jpg?thumb=1&w=360&h=360',
          title: '小米MIX 2S',
          desc: '晓龙845旗舰处理器，AI双摄像',
          price: '3299',
          start: '起'
        }, {
          id: '002',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3c1cc1a103dbccafee59d542ded8aa80.jpg?thumb=1&w=360&h=360',
          title: '红米6',
          desc: 'AI双摄，小屏高性能',
          price: '799'
        }]
      },
      hotSale: {
        title: {
          id: '001',
          imgUrl: 'https://i8.mifile.cn/v1/a1/801fa2e0-be9c-51e5-6d26-109b6414dc56!720x80.webp'
        },
        item: [{
          id: '001',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/688d838cbedb8b7d962ef93a6eb6e45d.jpg?thumb=1&w=720&h=360',
          title: '小米6X',
          desc: '全索尼相机，标配晓龙660 AIE处理器',
          price: '1399',
          prePrice: '1499',
          start: '起'
        }, {
          id: '002',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1d370ed298b199604bb202681406f32f.jpg?thumb=1&w=720&h=360',
          title: '红米Note 5 AI双摄',
          desc: '1.4μm大像素 AI双摄',
          prePrice: '1099',
          price: '999',
          start: '起'
        }, {
          id: '003',
          imgUrl: 'https://i8.mifile.cn/v1/a1/d5c8ea24-5290-46e0-8064-7634b4cbad70!360x360.webp',
          title: '小米Max 2 大屏电量',
          desc: '6.44"大屏，5300mAh大电量',
          prePrice: '1399',
          price: '1099',
          start: '起'
        }, {
          id: '004',
          imgUrl: 'https://i8.mifile.cn/v1/a1/e7853ea5-1260-6cb2-91ed-2c539a87db0a!360x360.webp',
          title: '红米5 Plus',
          desc: '全面屏，4000mAh大电量',
          prePrice: '999',
          price: '899',
          start: '起'
        }]
      },
      series: {
        title: {
          id: '001',
          imgUrl: 'https://i8.mifile.cn/v1/a1/93f395ea-5bc4-8807-33d6-4222a3ad4b1c!720x80.webp'
        },
        item: [{
          id: '001',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/273e138bb9a774730f383c16a5a08d3c.jpg?thumb=1&w=720&h=360',
          title: '小米8',
          desc: '全球首款双频GPS，晓龙845',
          price: '2699',
          start: '起'
        }, {
          id: '002',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e0e0d7878393eeddd51af166171ea66e.jpg?thumb=1&w=720&h=360',
          title: '小米8 SE',
          desc: '晓龙710全球首发，小屏旗舰',
          price: '1799',
          start: '起'
        }, {
          id: '003',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d68da7f79cc9800a34b1b48e1a439e44.jpg?thumb=1&w=360&h=360',
          title: '小米MIX 2',
          desc: '5.99"大屏，4轴光学防抖',
          prePrice: '3299',
          price: '2399',
          start: '起'
        }, {
          id: '004',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/53d32c5e55cba00b473b48908c571f02.jpg?thumb=1&w=360&h=360',
          title: '小米MIX 2S',
          desc: '晓龙845旗舰处理器，AI双摄',
          price: '3299',
          start: '起'
        }]
      }
    }
  },
  methods: {
  },
  computed: {
  },
  mounted () {
    this.bscroll = new BScroll(this.$refs.wraper, {
      click: true,
      tab: true,
      scrollY: true
    })
  }
}
</script>

<style lang="stylus" scoped type="text/stylus">
@import '~styles/variable.styl' // 这里的import写错颜色就是紫色的
.cellphone
  position: fixed
  top: $homeTop
  left: 0
  right: 0
  bottom: $homeBottom
  background: $bgColor
  overflow: hidden
</style>
