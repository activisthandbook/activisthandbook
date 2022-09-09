<script>
export default {
  data: function () {
    return {
      cookieBanner: "show",
    };
  },
  mounted() {
    if (localStorage.getItem("cookieBanner")) {
      this.cookieBanner = localStorage.getItem("cookieBanner");
    }
    if (localStorage.getItem("analyticsAllowed") === "yes") {
      this.turnOnAnalytics();
    }
  },
  methods: {
    decline() {
      this.cookieBanner = "hide";
      localStorage.setItem("cookieBanner", "hide");
      localStorage.setItem("analyticsAllowed", "no");
    },
    accept() {
      this.cookieBanner = "hide";
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
    v-show="cookieBanner === 'show'"
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
</template>
<style lang="scss" scoped>
.cookie-notification {
  position: fixed;
  text-align: center;
  bottom: 0;
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
</style>
