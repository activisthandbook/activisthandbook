<script setup>
import {reactive, watch } from "vue"

import { useRouter, useData } from "vitepress";
const { frontmatter } = useData();
const router = useRouter();

const state = reactive({
  urlArray: null,
  crumbs: []
});

renderCrumbs()

watch(
  () => router,
  () => {
    renderCrumbs()
  },
  { deep: true }
)


function renderCrumbs(){
  state.crumbs = [];
  state.urlArray = window.location.pathname.split("/")

  for (let index = 1; index < state.urlArray.length; index++) {
    let url = "";

    for (let i = 1; i < index + 1; i++) {
      url += `/${state.urlArray[i]}`
    }

    state.crumbs.push({
      title: state.urlArray[index],
      url: url
    })
  }
}
</script>
<template>
  <div class="breadcrumbs" v-if="state.crumbs[1] && !$frontmatter.focusMode">
    <span v-for="(crumb, index) in state.crumbs" :key="index" >
    <span v-if="index"> / </span><a :href="crumb.url">{{crumb.title}}</a>
    </span>
  </div>

</template>
<style scoped lang="scss">
  .breadcrumbs{
    font-size: 12px;
    margin-bottom:  calc(10px + 0.5vw);
    text-transform: uppercase;
    letter-spacing: 2px;

    a{
      border-bottom: 1px solid rgba(255,255,255,.5);
    }
  }
</style>
