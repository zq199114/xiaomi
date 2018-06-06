<!-- 展示模板 -->
<template>
<div>
  <!--<div class="cart">{{this.$store.state.count}}可以这样获取</div>-->
  <!--<div class="cart">{{this.todos[1].text}}</div>-->
  <!--<div class="cart">{{this.doneTodos[0].text}}</div>-->
  <!--<div class="cart">{{this.doneCount[0].text}}</div>-->
  <div class="cart" v-for="(item, index) in catlist" :key="index">
    <div class="name" @click="check">{{item.cartName}}</div>
    <div class="model">{{item.phone_model}}</div>
    <div class="price">{{item.phone_price}}</div>
    <div class="num">{{item.num}}</div>
  </div>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
      catlist: [{
        'cartName': '红米5',
        'phone_model': 'yidong',
        phone_price: '1099',
        num: 18
      }, {
        'cartName': '红米5',
        phone_model: 'yidong',
        phone_price: '1099',
        num: 18
      }, {
        'cartName': '红米5',
        phone_model: 'yidong',
        phone_price: '1099',
        num: 18
      }, {
        'cartName': '红米5',
        phone_model: 'yidong',
        phone_price: '1099',
        num: 18
      }]
    }
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapState(['todos']),
    // ...mapGetters(['doneTodos']) // 这一行和下一行的作用相同
    ...mapGetters({
      // 把 `this.doneTodos` 映射为 `this.$store.getters.doneTodos`
      doneCount: 'doneTodos'
    })
  },
  methods: {
    check () {
      // for in 可以遍历出键名,但建议在遍历对象的时候用, for of适合遍历数组但只能遍历出值
      for (var i in this.catlist) {
        console.log(i)
        // console.log(this.catlist[i])
        if (typeof (this.catlist[i]) === 'object') {
          for (var item in this.catlist[i]) {
            console.log(item)
          }
        }
      }
      // 上下是两种不同的遍历对象和数组的方法
      console.log('-----------------------------------')
      for (let key of this.catlist) { // 把对象全都遍历出来
        console.log(key)
        for (let io in key) { // 再把对象的键值全部遍历出来 这里用let下面的io就取不到了
          console.log(key[io])
          console.log(key['num'])
          console.log(key)
        }
        key.num = 50
        console.log(key)
        //console.log(io)
        console.log(this.catlist)
      }
    }
  }
}
</script>
<!-- 样式代码 -->
<style scoped lang="stylus" type="text/stylus">

</style>
