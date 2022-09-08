import DefaultTheme from 'vitepress/theme'

// Custom
import CustomLayout from './CustomLayout.vue'
import './vars.scss'
import './article.scss'
import './custom.scss'

export default {
  ...DefaultTheme,
  cleanUrls: 'without-subfolders',
  appearance: false,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: CustomLayout,
}
