<!-- 展示模板 -->
<template>
<div class="activity">
  <img v-for="item in imgData" :src="item.imgUrl" :key="item.id">
</div>
</template>

<script>
export default {
  name: 'HomeActivity',
  data () {
    return {
      imgData: [{
        id: '001',
        imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d90dc8f6466deb4b0a17d9d4b8ba4a6a.jpg?thumb=1&w=358&h=508'
      }, {
        id: '002',
        imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bb4e6198ae2f99f158109b217064f703.jpg?thumb=1&w=358&h=252'
      }, {
        id: '003',
        imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b3fa7ac28fa7dd9b02d816ef564c27cd.jpg?thumb=1&w=358&h=252'
      }, {
        id: '004',
        imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a142cfa55aabf1521ce3515df6a2c102.jpg?thumb=1&w=720&h=280'
      }]
    }
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">
.activity
  background: #fff
  margin-top: .16rem
  width: 100%
  img:nth-child(-n+3)
    width: 49.5%
  img:nth-child(1)
    float: left
  img:nth-child(2)
    float: right
  img:nth-child(3)
    float: right
  img:last-child
    width: 100%
    margin-top: .16rem
</style>
