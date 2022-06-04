import Icon from './src/icon.vue'
import { withInstall } from '@ggbond-ui/utils/with-install'
// Icon.install = function(app: App) {
//   app.component(Icon.name, Icon)
// }

const GIcon = withInstall(Icon)
export { GIcon }
export default GIcon
