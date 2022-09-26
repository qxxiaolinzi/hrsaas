import router from '@/router'
import store from './store'

const whiteList = ['/login', '/404']
router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  // next(false)
  // 1.判断token是否存在
  // 2.1 token存在，处于登陆状态 是否处于登录页 处于则跳转首页 否则放行
  // 2.2 不存在，不处于登录状态 是否处于白名单 处于则放行  否则跳转登录页

  if (store.getters.token) { // 已登陆状态
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else { // 没有登陆
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
