<!-- 展示模板 -->
<template>
<div class="best">
  <div class="bestPro">
    <img :src="infoData.items.imgUrl">
  </div>
  <div class="container">
    <div class="bestPro_item" v-for="item in infoData.items.children" :key="item.id">
      <img :src="item.imgUrl">
      <div class="proInfo">
        <div class="name">{{item.name}}</div>
        <div class="info">{{item.info}}</div>
        <div class="prePrice">{{item.prePrice}}</div>
        <div v-if="item.befPrice" class="befPrice">{{item.befPrice}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeDailybast',
  data () {
    return {
      infoData: {
        items: {
          id: '0001',
          imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cd6658abe164e32802f4040c65d96540.jpg?thumb=1&w=720&h=440',
          children: [{
            id: '001',
            imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c0bd24d4f71813791c2987e4bf41696d.jpg?thumb=1&w=360&h=360',
            name: '红米5A 轻巧长续航',
            info: '高通骁龙处理器',
            prePrice: '569',
            befPrice: '599'
          }, {
            id: '002',
            imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c0bd24d4f71813791c2987e4bf41696d.jpg?thumb=1&w=360&h=360',
            name: '红米5 16GB',
            info: '千元全面屏，前置柔光自拍',
            prePrice: '749',
            befPrice: '799'
          }, {
            id: '003',
            imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/850d316b25648c9862c7c22aefba9280.jpg?thumb=1&w=360&h=360',
            name: '红米Note 5 4GB+64GB',
            info: '1.4μm大像素 AI 双摄',
            prePrice: '1399'
          }, {
            id: '004',
            imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8612f157af2c116b7e3fc47356cdb7be.jpg?thumb=1&w=360&h=360',
            name: '红米自拍手机S2',
            info: '1600万像素自拍手机',
            prePrice: '999'
          }]
        }
      }
    }
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">
@import "~styles/variable.styl"
@import "~styles/mixins.styl"
.best
  background: #fff
  margin-top: $topMargin
  .bestPro
    img
      width: 100%
  .container
    display: flex // 弹性布局
    justify-content: space-between // 两端对齐
    flex-wrap: wrap // 自动换行
    .bestPro_item
      width: 49.5%
      display: inline-block
      margin-top: .06rem
      img
        width: 100%
      .proInfo
        padding: .2rem .27rem
        .name
          font-size: .28rem
          color: rgba(0,0,0,.87)
          // white-space: nowrap // 规定段落中的文本不进行换行  下面这三个我把他封装了起来
          // text-overflow:ellipsis // 文字超出范围显示后用省略号代替
          // overflow: hidden
          ellipsis() // 用这个封装的样式文件
        .info
          font-size: .22rem
          color: rgba(0,0,0,.54)
          margin-top: .1rem
        .prePrice
          margin-top: .1rem
          display: inline-block
          font-size: .28rem;
          color: #ea625b
        .prePrice:before
          content: '￥'
          font-size: .76em
        .befPrice
          margin-top: .1rem
          display: inline-block
          font-size: .22rem;
          color: rgba(0,0,0,.54)
          text-decoration: line-through // 加上删除线
        .befPrice:before
          content: '￥'
          font-size: .76em
</style>
