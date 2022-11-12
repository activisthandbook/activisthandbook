import DefaultTheme from "vitepress/theme";
import { createGtm } from "@gtm-support/vue-gtm";

// Custom
import CustomLayout from "./CustomLayout.vue";
import NotFound from "./NotFound.vue";
import "./vars.scss";
import "./article.scss";
import "./custom.scss";

import DynamicImage from "./components/DynamicImage.vue";
import ActionDonate from "./components/actions/ActionDonate.vue";
import ActionVolunteer from "./components/actions/ActionVolunteer.vue";
import ActionSmartLarge from "./components/actions/ActionSmartLarge.vue";
import ActionSmartSmall from "./components/actions/ActionSmartSmall.vue";
import ActionCustom from "./components/actions/ActionCustom.vue";
import ActionButton from "./components/actions/ActionButton.vue";

export default {
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
    // Check if we're in the client
    app.use(
      createGtm({
        id: "GTM-TX33N7P", // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']

        enabled: false, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
        debug: true, // Whether or not display console logs debugs (optional)
        // vueRouter: router, // Pass the router instance to automatically sync with router (optional)
      })
    );

    app.component("dynamic-image", DynamicImage);
    app.component("action-donate", ActionDonate);
    app.component("action-volunteer", ActionVolunteer);
    app.component("action-smart-large", ActionSmartLarge);
    app.component("action-smart-small", ActionSmartSmall);
    app.component("action-custom", ActionCustom);
    app.component("action-button", ActionButton);
  },
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: CustomLayout,
  NotFound: NotFound,
};
