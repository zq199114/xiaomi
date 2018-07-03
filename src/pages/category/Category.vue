<template>
  <div class="category">
    <use-header :title="title"></use-header>
    <left-column></left-column>
    <right-column></right-column>
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
      title: '分类'
    }
  }
}
</script>

<style scoped>

</style>
