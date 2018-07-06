/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  // console.log(name)
  // console.log(content)
  if (!name) { return }
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  localStorage.setItem(name, content)
}
/*
* 获取localStorage
* */
export const getStore = name => {
  // console.log(name)
  // console.log(localStorage.getItem(name))
  // if (name === 'defaultAddress') { return }
  if (!name) { return }
  return JSON.parse(localStorage.getItem(name)) // 如果存储的是undefine的话，JSON.parse会报错
  // return localStorage.getItem(name)
}
/*
* 移除
*/
export const removeStroe = name => {
  localStorage.removeItem(name)
}
