<template>
  <div class="call-to-action primary-action small" tabindex="0" id="action-smart-small">
    <h1>⚠️ Urgent request: Please don't scroll away</h1>
    <p class="description">
      We ask you, humbly, to help. We depend on donations to stay free and independent. But very few people decide to donate.
    </p>
    <p class="description">
      Activist Handbook trains 6000 new activists every month. We are a nonprofit and we have published over 450+ guides for change-makers.
    </p>
    <p class="description">
      We appreciate any donation, no matter how small. Give whatever you can afford this month:
    </p>
    <div class="meta">
      <a href="/donate" class="promo-smart-small">Donate now</a>
    </div>
  </div>
</template>
<style scoped lang="scss">
.call-to-action.small {
  padding: calc(14px + .8vw) calc(8px + 1vw);

  h1 {
    font-size: calc(16px + 1vw);
  }

  .description {
    font-size: calc(14px + 0.5vw);
    font-family: var(--vp-font-family-base);
    font-weight: 400;
  }
  a{
    font-size: calc(12px + .5vw);
    padding: 12px 24px;
  }
}
</style>
