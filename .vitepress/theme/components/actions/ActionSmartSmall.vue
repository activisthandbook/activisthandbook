<template>
  <div class="call-to-action primary-action small" tabindex="0" id="action-smart-small">
    <h1>Sorry to interrupt...</h1>
    <p class="description">
      Our volunteers spent many hours writing this article. They got $0 for their work. But now, they do have to pay rent. Consider making a small donation and support them:
    </p>
    <div class="meta">
      <a href="/donate">Make small donation</a>
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
