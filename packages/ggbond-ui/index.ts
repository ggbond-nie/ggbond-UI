import { GIcon } from '@ggbond-ui/components'
import type { App } from 'vue' // ts中的优化只获取类型
// ....

const components = [GIcon]
const install = (app: App) => {
  // 每个组件在编写的时候都提供了install方法

  // 有的是组建 有的可能是指令 xxx.install = ()=>{app.directive()}
  components.forEach((component) => app.use(component))
}
export default {
  install,
}
export * from '@ggbond-ui/components'
