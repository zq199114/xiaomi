// rem转换插件
(function (doc, win) {
  let docEl = doc.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let recalc = function () {
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 38 * (clientWidth / 320) + 'px' // 这里的是后来计算的本来时20，但是这个项目一开始是用css初始化文件设置一个html 的font-size为50px的基础值但这样用rem为单位的大侠就是被定死的这样不好
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  win.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
