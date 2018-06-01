export default {
  install (Vue, options) {
    // 防止底部蒙层滚动的全局方法
    let bodyEl = document.body
    let top = 0
    Vue.prototype.stopBodyScroll = function (isFixed) {
      if (isFixed) {
        top = window.scrollY

        bodyEl.style.position = 'fixed'
        bodyEl.style.top = -top + 'px'
      } else {
        bodyEl.style.position = ''
        bodyEl.style.top = ''

        window.scrollTo(0, top) // 回到原先的top
      }
    }
  }
}
