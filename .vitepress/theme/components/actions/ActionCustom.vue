<template>
  <div class="call-to-action">
    <slot></slot>
    <div class="meta">
      <a :href="buttonLink">{{ buttonLabel }}</a>
    </div>
  </div>
</template>
<script>
export default{
  props: ["buttonLink", "buttonLabel"]
}
</script>
