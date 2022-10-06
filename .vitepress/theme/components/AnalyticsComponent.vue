<script>
export default {
  data: function () {
    return {
      cookieBanner: "show",
      analyticsAllowed: null,
    };
  },
  mounted() {
    if (localStorage.getItem("cookieBanner")) {
      this.cookieBanner = localStorage.getItem("cookieBanner");
    }
    if (localStorage.getItem("analyticsAllowed")) {
      this.analyticsAllowed = localStorage.getItem("analyticsAllowed");
    }
    if (localStorage.getItem("analyticsAllowed") === "yes") {
      this.turnOnAnalytics();
    }
  },
  methods: {
    decline() {
      this.cookieBanner = "hide";
      this.analyticsAllowed = "no";
      localStorage.setItem("cookieBanner", "hide");
      localStorage.setItem("analyticsAllowed", "no");
    },
    accept() {
      this.cookieBanner = "hide";
      this.analyticsAllowed = "yes";
      localStorage.setItem("cookieBanner", "hide");
      localStorage.setItem("analyticsAllowed", "yes");
      this.turnOnAnalytics();
    },
    turnOnAnalytics() {
      console.log("using analytics");
      this.$gtm.enable(true);
    },
  },
};
</script>
<template>
  <div
    class="cookie-notification"
    v-if="cookieBanner === 'show'"
    data-nosnippet
  >
    <div class="explanation">
      <strong>Analytics help us write better guides for change-makers.</strong
      ><br />
      Are you ok with us using cookies for analytics?
    </div>
    <button class="button decline" @click="decline()">Decline</button>
    <button class="button accept" @click="accept()">OK</button>
  </div>
  <div v-if="cookieBanner === 'hide'" class="change-choice">
    <div><strong>Privacy</strong></div>
    <div v-if="analyticsAllowed === 'yes'">
      You have accepted cookies for analytical purposes (<span
        @click="decline()"
        >turn off</span
      >).
    </div>
    <div v-if="analyticsAllowed === 'no'">
      You have not accepted cookies for analytical purposes (<span
        @click="accept()"
        >turn on</span
      >).
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
  padding: 4vh 13vw;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  z-index: 100;

  .explanation {
    max-width: 512px;
    margin: 0 auto 16px;
  }

  .button {
    font-family: var(--vp-font-family-headings);
    font-weight: 700;
    padding: 16px;
    width: 128px;
    color: white;
    border-radius: 2px;
    margin: 4px;

    &:hover {
      opacity: 0.9;
    }
  }
  .decline {
    background: black;
  }
  .accept {
    background: var(--vp-c-secondary);
    color: var(--vp-c-white);
  }
}
.change-choice {
  text-align: center;
  font-size: 0.8em;
  opacity: 0.7;
  padding: 16px;
  margin-top: 96px;

  span {
    cursor: pointer;
  }
}
</style>
