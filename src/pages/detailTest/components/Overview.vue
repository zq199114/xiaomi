<!-- 展示模板 -->
<template>
<div class="overview">
  <div class="overview_title">
    <div class="view acitve">概述</div>
    <div class="parameters">参数</div>
  </div>
  <div class="overview_section">
    <div v-for="(item, index) in imgStore" :key="item.id">
      <div v-show="index<showNum">
        <img class="over_img" :src="item.imgUrl" alt="">
      </div>
    </div>
    <div v-if="showMore" class="click_show" @click="showImg">查看全部图文详情></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'testDetailOverview',
  props: {
    imgStore: Array
  },
  data () {
    return {
      // imgStore: [
      //   {
      //     id: '001',
      //     imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/63bcf275fd8393325c6f343b3c89e5c9.jpg?w=1080&h=1735'
      //   }, {
      //     id: '002',
      //     imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bfb8f59814fa33003e94451eeaba0f9f.jpg?w=1080&h=1397'
      //   }, {
      //     id: '003',
      //     imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/202a31934625738bb2e10dcdd2d28118.jpg?w=1080&h=1800'
      //   }, {
      //     id: '004',
      //     imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60318395fb54759e52b81a6a2364d6b0.jpg?w=1080&h=1651'
      //   }, {
      //     id: '005',
      //     imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/40a4b1aa7d68de23177f74f7f4613001.jpg?w=1080&h=1469'
      //   }, {
      //     id: '006',
      //     imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f3876b42004cfee41a78e9a9aeecc250.jpg?w=1080&h=1401'
      //   }, {
      //     id: '007',
      //     imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/0b7d5ffda59b0059fae094b0746c6d07.jpg?w=1080&h=1633'
      //   }, {
      //     id: '008',
      //     imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/228e59bc080960dbe621eca874bc6a2e.jpg?w=1080&h=1864'
      //   }, {
      //     id: '009',
      //     imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5567d33566afa7a64cba33a59e4d60d3.jpg?w=1080&h=1862'
      //   }, {
      //     id: '010',
      //     imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5b01ca1841e7cdb9ecab545d728cee3b.jpg?w=1080&h=966'
      //   }, {
      //     id: '011',
      //     imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b51cbf4618e1d6d30fe16125adec3edc.jpg?w=1080&h=1617'
      //   }, {
      //     id: '012',
      //     imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/798264aa45a5fa6e6644b0bf5fc28157.jpg?w=1080&h=1479'
      //   }, {
      //     id: '013',
      //     imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a27e758bda674993479a6123453b5bfa.jpg?w=1080&h=1084'
      //   }, {
      //     id: '014',
      //     imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8d37ce698ecdc681ba7fd736a7fb1f2c.jpg?w=1080&h=870'
      //   }, {
      //     id: '015',
      //     imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/441e3f68210ae06cc3e76e9e1b0a232d.jpg?w=1080&h=1400'
      //   }, {
      //     id: '016',
      //     imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f97475e0f09e5936f1c5bc9240aed4b0.jpg?w=1080&h=1305'
      //   }, {
      //     id: '017',
      //     imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a6d783f63fec32baeac9635a06fd1b4f.jpg?w=1080&h=2236'
      //   }],
      showNum: 3,
      showMore: true
    }
  },
  methods: {
    showImg () {
      this.showNum = this.imgStore.length
      console.log(this.showNum)
      this.showMore = false
    }
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">
.overview
  margin-bottom: 1.24rem
  background: #fff
  .overview_title
    width: 100%
    height: .88rem
    border-bottom: .01rem solid #ddd
    .view,.parameters
      display: inline-block
      width: 50%
      text-align: center
      line-height: .88rem
      font-size: .26rem
      float: left
    .parameters:before
      content: ''
      height: .3rem
      color: #ddd
      border: .02rem solid #ddd
      float:left
      margin-top: .29rem
    .acitve
      color: #ff6700
  .overview_section
    width: 100%
    .over_img
      width: 100%
  .click_show
    height: .88rem
    line-height: .88rem
    text-align: center
    color: #ff6700
</style>
