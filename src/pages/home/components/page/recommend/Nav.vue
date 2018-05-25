<!-- 展示模板 -->
<template>
<div class="nav">
  <img class="nav_img" v-for="item in img" :src="item.imgUrl" :key="item.id">
</div>
</template>

<script>
export default {
  name: 'HomeNav',
  data () {
    return {
      img: [{
        id: '001',
        imgUrl: 'https://i8.mifile.cn/v1/a1/6d64ef02-bb5c-da49-45cb-7d6861885b29!144x152.webp'
      }, {
        id: '002',
        imgUrl: 'https://i8.mifile.cn/v1/a1/d29e748c-0177-5b4c-d2ab-401070713bac!144x152.webp'
      }, {
        id: '003',
        imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9173298cc0297ce1803c43485e525358.jpg?thumb=1&w=144&h=152'
      }, {
        id: '004',
        imgUrl: 'https://i8.mifile.cn/v1/a1/e560f98a-48bb-25a1-daa2-72bff8cc7c69!144x152.webp'
      }, {
        id: '005',
        imgUrl: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/938f75d98244629b0d29bfc9c4323f8d.png?thumb=1&w=144&h=152'
      }]
    }
  }
}
</script>
<!-- 样式代码 -->
<style type="text/stylus" scoped lang="stylus">
.nav
  width: 100%
  .nav_img
    width: 20%
</style>
