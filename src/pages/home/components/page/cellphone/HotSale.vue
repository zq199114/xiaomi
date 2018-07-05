<template>
    <div class="hot_sale">
      <div class="title"><img :src="hotSale.title.imgUrl" alt=""></div>
      <ul class="title-list">
        <li class="product_item" v-for="item in hotSale.item" :key="item.id">
          <img :src="item.imgUrl" alt="">
          <div class="contain">
            <div class="item_title">{{item.title}}</div>
            <div class="item_desc">{{item.desc}}</div>
            <div class="item_price"><i>￥</i>{{item.price}}<i> {{item.start}}</i><i class="pre">￥{{item.prePrice}}</i></div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HotSale',
  props: {
    hotSale: Object
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import '~styles/variable.styl'
  .hot_sale
    .title
      img
        width: 100%
    .title-list
      overflow: hidden
      background: #fdfdfd
      display: flex
      justify-content: space-between
      flex-wrap: wrap
      .product_item
        width: 49.5%
        img
          width: 100%
        .contain
          padding: .15rem .2rem .2rem
          text-align: left
          .item_title
            font-size: .33rem
          .item_desc
            font-size: .25rem
            color: rgba(0,0,0,.54)
            line-height: .5rem
          .item_price
            font-size: .33rem
            color: $mainColor
            i
              font-size: .23rem
              // margin-left: .01rem
            .pre
              color: rgba(0,0,0,.54)
              text-decoration: line-through
              // margin-left: .05rem
      :nth-child(-n+2)
        width: 100% // padding被挤出去了
        box-sizing: border-box // 用box-sizing顶回去
        .contain
          position: relative
          .item_title, .item_desc
            // display: inline-block
            width:
            // float: left
          .item_price
            position: absolute
            display: inline-block
            right: .35rem
            top: .1rem
            .pre
              position: absolute
              top: .5rem
              right: .0rem
</style>
