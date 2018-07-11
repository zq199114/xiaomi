<template>
  <div class="category">
    <use-header :title="title"></use-header>
    <left-column :list="list" @change="change" :changeId="changeId"></left-column>
    <right-column :list="list" :id="id" @menuChange="menuChange"></right-column>
    <home-bottombar></home-bottombar>
  </div>
</template>

<script>
import UseHeader from 'common/commonComponents/UseHeader'
import HomeBottombar from 'common/commonComponents/HomeBottombar'
import LeftColumn from './components/left-column'
import RightColumn from './components/right-column'
export default {
  name: 'Category',
  components: {
    UseHeader,
    HomeBottombar,
    LeftColumn,
    RightColumn
  },
  data () {
    return {
      title: '分类',
      list: null,
      id: null, // 左栏传来的id
      changeId: null // 传到左边栏的id
    }
  },
  methods: {
    change (id) {
      this.id = id
    },
    menuChange (id) {
      this.changeId = id
    }
  },
  mounted () {
    this.$axios.get('/list/item').then(res => {
      if (res.status === 200) {
        // console.log(res)
        this.list = res.data
      }
    })
  }
}
</script>

<style scoped>

</style>
