<template>
  <div class="call-to-action primary-action" tabindex="0" id="action-custom">
    <slot></slot>
    <div class="meta">
      <a :href="buttonlink">{{ buttonlabel }}</a>
    </div>
  </div>
</template>
<script>
export default{
  props: ["buttonlink", "buttonlabel"]
}
</script>
