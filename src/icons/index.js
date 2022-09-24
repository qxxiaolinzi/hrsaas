import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
// console.log(req.key())

// const requireAll = requireContext => requireContext.keys().map(requireContext)
const requireAll = requireContext => requireContext.keys().map((val) => {
  return requireContext(val)
})

requireAll(req)
console.log(requireAll(req))
