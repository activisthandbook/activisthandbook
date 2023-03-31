<script setup>
import { ref, onMounted } from "vue"

const cookieBanner = ref("show")
const analyticsAllowed = ref(null)


onMounted(() => {
  if (localStorage.getItem("cookieBanner")) {
    cookieBanner.value = localStorage.getItem("cookieBanner");
  }
  if (localStorage.getItem("analyticsAllowed")) {
    analyticsAllowed.value = localStorage.getItem("analyticsAllowed");
  }
})

function decline() {
  cookieBanner.value = "hide";
  analyticsAllowed.value = "no";
  localStorage.setItem("cookieBanner", "hide");
  localStorage.setItem("analyticsAllowed", "no");
  window.gtag('consent', 'update', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ads_data_redaction': true
  });
  const consentRevokedEvent = new Event("consentRevoked");
  window.dispatchEvent(consentRevokedEvent);
}
function accept() {
  cookieBanner.value = "hide";
  analyticsAllowed.value = "yes";
  localStorage.setItem("cookieBanner", "hide");
  localStorage.setItem("analyticsAllowed", "yes");

  window.gtag('consent', 'update', {
    'ad_storage': 'granted',
    'analytics_storage': 'granted',
    'ads_data_redaction': false
  })

  const consentGrantedEvent = new Event("consentGranted");
  window.dispatchEvent(consentGrantedEvent);
}
</script>
<template>
  <!-- BANNER -->
  <div
    class="cookie-notification"
    v-if="cookieBanner === 'show'"
    data-nosnippet
  >
    <div class="explanation">
      <div class="title">Analytics help us write better guides for change-makers.</div>
      Are you ok with us using cookies for analytics and ad metrics? Read our <a href="/about/privacy" class="privacy-policy">privacy policy</a> for more information.
    </div>
    <button class="button accept" @click="accept()">OK 👍</button>
    <button class="button decline" @click="decline()">Decline</button>

  </div>

  <!-- CHANGE CHOICE  -->
  <div class="change-choice-container" v-if="cookieBanner === 'hide'">
    <div class="change-choice">
      <div><strong>Privacy</strong></div>
      <div v-if="analyticsAllowed === 'yes'">
        You have accepted cookies for analytical purposes (<a class="toggle"
          @click="decline()" @keyup.enter="decline()" tabindex="0"
          >turn off</a
        >).
      </div>
      <div v-if="analyticsAllowed === 'no'">
        You have not accepted cookies for analytical purposes (<a class="toggle"
          @click="accept()" @keyup.enter="accept()" tabindex="0"
          >turn on</a
        >).
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cookie-notification {
  position: fixed;
  text-align: center;
  bottom: 0;
  left: 0;
  right:0;
  width: 100%;
  background-color: var(--vp-c-white);
  padding: 4vh 10vw;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 100;

  .explanation {
    max-width: 512px;
    margin: 0 auto 16px;

    .title{
      font-size: calc(16px + 1vw);
      line-height: 1.2;
      font-weight: bold;
      margin-bottom:8px;
    }

    a{
      border-bottom:1px solid rgba(0,0,0,.1)
    }
  }

  .button {
    font-family: var(--vp-font-family-headings);
    font-weight: 700;
    padding: 14px;
    width: calc(112px + 5vw);
    color: var(--vp-c-white);
    border-radius: 2px;
    margin: 4px;

    &:hover {
      opacity: 0.9;
    }
  }
  .decline {
    background: rgba(0, 0, 0, 0.8);
  }
  .accept {
    background: var(--vp-c-secondary);

  }
}
.change-choice {
  // background: var(--vp-c-bg-alt);
  // text-align: center;
  font-size: 12px;
  line-height: 1.5;
  color: #444;

  .toggle {
    cursor: pointer;
  }
}
</style>
