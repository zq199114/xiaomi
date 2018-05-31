<!-- 展示模板 -->
<template>
<div class="selection_info">
  <div class="selected border-bottom" @click.stop="showVersion">
    <i>已选</i>
    <div class="item">红米Note 5 {{current_ver}} {{current_color}} x{{current_num}}</div>
    <span class="iconfont arrow">&#xe62d;</span>
    <!--在这里不能把click事件放到父元素div里,因为下面的组件也在父组件里面所以点击下面的组件也会触发父组件里的click事件
    放在外面就没事-->
  </div>
  <version-detail
    v-show="showclick"
    :version="version"
    :init="initData"
    @backDet="showVersion">
  </version-detail>
  <div class="send_to border-bottom">
    <i>送至</i>
    <div class="ctiy">北京市 东城区</div>
    <div class="supply">有现货</div>
    <span class="iconfont  arrow">&#xe62d;</span>
  </div>
  <div class="service">
    <span class="iconfont gouzi">&#xe60b;</span><div>7天无理由退货</div>
    <span class="iconfont gouzi">&#xe60b;</span><div>15天质量问题换货</div>
    <span class="iconfont gouzi">&#xe60b;</span><div>365天保修</div>
  </div>
</div>
</template>

<script>
import VersionDetail from 'common/detail/VersionDetail'
export default {
  name: 'DetailSelectionInfo',
  components: {
    VersionDetail
  },
  data () {
    return {
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
          name: '金色'
        }, {
          id: 'c002',
          name: '黑色'
        }, {
          id: 'c003',
          name: '玫瑰金'
        }, {
          id: 'c004',
          name: '魔力蓝'
        }]
      },
      current_ver: null,
      current_color: null,
      current_price: null,
      current_num: '1',
      showclick: false,
      initData: {}
    }
  },
  methods: {
    showVersion () {
      console.log('weishenm')
      this.showclick = !this.showclick
    }
  },
  mounted () {
    this.current_ver = this.version.version_item[0].name
    this.current_price = this.version.version_item[0].price
    this.$emit('transmitPrice', this.current_price)
    this.current_color = this.version.color[0].name
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">
.selection_info
  background: #fff
  padding: 0 .32rem
  margin-bottom: .2rem
  .selected,.send_to,.service
    padding: .3rem 0
    i
      font-size: .24rem;
      color: rgba(0,0,0,.54);
      display: inline-block
      margin-right: .3rem
    div
      font-size: .24rem
      color: rgba(0,0,0,.87)
      display: inline-block
    .supply
      color: #f56600
    .arrow
      float: right
      font-size: .24rem
    .gouzi
      font-size: .2rem
      color: #f56600
  .service
    div
      display: inline-block
      font-size: .2rem
      color: rgba(0,0,0,.54)
      margin-right: .25rem
</style>
