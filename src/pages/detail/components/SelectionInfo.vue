<!-- 展示模板 -->
<template>
<div class="selection_info">
  <div class="selected border-bottom" @click.stop="showVersion">
    <i>已选</i>
    <div class="item">{{this.tranName}} {{current_ver}} {{current_color}} x{{current_num}}</div>
    <span class="iconfont arrow">&#xe62d;</span>
    <!--在这里不能把click事件放到父元素div里,因为下面的组件也在父组件里面所以点击下面的组件也会触发父组件里的click事件
    放在外面就没事-->
  </div>
  <!--这里应该用路由来做-->
  <version-detail
    v-if="showclick"
    :version="version"
    :init="initData"
    :tranName="tranName"
    @backDet="showVersion"
    @addsucceed="addsucceed"
    @transmit="transmit"
  >
  </version-detail>
  <fade>
    <succeed v-if="succeed"></succeed>
  </fade>
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
import Succeed from 'common/popup/Succeed'
import Fade from 'common/animation/Fade'

export default {
  name: 'DetailSelectionInfo',
  props: {
    showSel: Boolean,
    tranName: String
  },
  components: {
    VersionDetail,
    Succeed,
    Fade
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
      current_ver: null,
      current_color: null,
      current_price: null,
      current_num: '1',
      current_name: null,
      showclick: false,
      succeed: false,
      initData: {},
      current_nam: null
    }
  },
  methods: {
    transmit (item) {
      if (typeof (item) === 'object') {
        this.current_ver = item.name
        this.current_color = item.color
        this.current_num = item.num
        this.emitTar(item.price)
      }
    },
    addsucceed () {
      this.succeed = true
      setTimeout(() => {
        this.succeed = false
      }, 500)
    },
    showVersion () {
      if (this.showSel) {
        this.$emit('changSel')
      }
      this.showclick = !this.showclick
      // this.stopBodyScroll(this.showclick)
    },
    emitTar (item) {
      this.$emit('transmitPrice', item)
    }
  },
  watch: {
    showSel () {
      if (this.showSel) {
        this.showVersion()
      }
    },
    tranName () {
      this.current_name = this.tranName
    }
  },
  mounted () {
    this.current_ver = this.version.version_item[0].name
    this.current_price = this.version.version_item[0].price
    this.current_color = this.version.color[0].name
    this.emitTar(this.current_price)
    this.initData = {
      nam: this.current_name,
      ver: this.version.version_item[0],
      col: this.version.color[0]
    }
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
