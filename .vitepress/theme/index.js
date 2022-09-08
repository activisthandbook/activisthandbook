import DefaultTheme from 'vitepress/theme'

// Custom
import CustomLayout from './CustomLayout.vue'
import './vars.scss'
import './article.scss'
import './custom.scss'

import { createGtm } from '@gtm-support/vue-gtm'

export default {

  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.

    // Check if we're in the client
    
  },
  mounted(){
    turnOnAnalytics()
    document.addEventListener('analyticsAccepted', () => {
      turnOnAnalytics()
    })

    function turnOnAnalytics() {
      if (localStorage.getItem('analyticsAllowed') === 'yes') {
        console.log('using analytics')
        this.$root..use(
          createGtm({
            id: 'GTM-TX33N7P', // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']

            enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
            debug: true, // Whether or not display console logs debugs (optional)
            // vueRouter: router, // Pass the router instance to automatically sync with router (optional)
          })
        )
        }
    }
  },
  ...DefaultTheme,
  cleanUrls: 'without-subfolders',
  appearance: false,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: CustomLayout,
}
