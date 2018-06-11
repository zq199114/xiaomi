/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
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
  if (!name) { return }
  return JSON.parse(localStorage.getItem(name))
}
/*
* 移除
*/
export const removeStroe = name => {
  localStorage.removeItem(name)
}
