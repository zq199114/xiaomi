<template>
    <div class="new_product">
      <div class="title"><img :src="newProduct.title.imgUrl" alt=""></div>
      <ul class="title-list">
        <li class="product_item" v-for="item in newProduct.item" :key="item.id">
          <img :src="item.imgUrl" alt="">
          <div class="contain">
            <div class="item_title">{{item.title}}</div>
            <div class="item_desc">{{item.desc}}</div>
            <div class="item_price"><i>￥</i>{{item.price}}<i> {{item.start}}</i></div>
          </div>
        </li>
      </ul>
      <img class="banner" :src="newProduct.banner.imgUrl" alt="">
    </div>
</template>

<script>
export default {
  name: 'NewProduct',
  props: {
    newProduct: Object
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import '~styles/variable.styl'
.new_product
  margin-top: $topMargin
  .title
    img
      width: 100%
  .title-list
    overflow: hidden
    background: #fdfdfd
    display: flex
    justify-content: space-between
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
  .banner
    width: 100%
    margin-top: $topMargin
    margin-bottom: $topMargin
</style>
