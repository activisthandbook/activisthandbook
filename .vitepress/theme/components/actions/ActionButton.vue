<script setup>
import { useRouter } from "vitepress";
const router = useRouter();

const props = defineProps(["buttonlink", "buttonanchor", "buttonlabel"])

function focusID(anchor){
  const elements = document.getElementsByClassName(anchor);
  if(elements && elements[0]){
    elements[0].scrollIntoView({
      behavior: 'smooth'
    });
  }
}
</script>
<template>
  <a v-if="props.buttonlink && props.buttonlink.startsWith('http')" :href="props.buttonlink" class="button" target="_blank">{{ buttonlabel }}</a>
  <a v-else-if="props.buttonlink" :href="props.buttonlink" class="button">{{ buttonlabel }}</a>
  <a v-else @click="focusID(props.buttonanchor)" class="button">{{ buttonlabel }}</a>
</template>

