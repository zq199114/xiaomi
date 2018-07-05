<template>
    <div class="series">
      <div class="title"><img :src="series.title.imgUrl" alt=""></div>
      <ul class="title-list">
        <li class="product_item" v-for="item in series.item" :key="item.id">
          <img :src="item.imgUrl" alt="">
          <div class="contain">
            <div class="item_title">{{item.title}}</div>
            <div class="item_desc">{{item.desc}}</div>
            <div class="item_price"><i>￥</i>{{item.price}}<i> {{item.start}}</i><i class="pre" v-if="item.prePrice">￥{{item.prePrice}}</i></div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Series',
  props: {
    series: Object
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
@import '~styles/variable.styl'
.series
  margin-top: $topMargin
  homeItemList()
</style>
