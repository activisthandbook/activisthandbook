<script setup>
import { useRouter } from "vitepress";
const router = useRouter();

const props = defineProps(["buttonlink", "buttonanchor", "buttonlabel"])

function act(){
 if(!props.buttonlink){
  focusID(props.buttonanchor)
 } else {

  if(props.buttonlink.startsWith("http")){
    window.open(props.buttonlink, "_self");
  } else {
    router.go(props.buttonlink)
  }
 }
}

function focusID(anchor){
  const elements = document.getElementsByClassName(anchor);
  if(elements && elements[0]){
    console.log(elements[0])
    elements[0].scrollIntoView({
      behavior: 'smooth'
    });
  }
}
</script>
<template>
  <a @click="act()" class="button">{{ buttonlabel }}</a>
</template>

