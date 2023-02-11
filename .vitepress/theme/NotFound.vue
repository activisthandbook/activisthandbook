<template>
  <ClientOnly>
    <div class="vp-doc" v-if="!router.route.path.startsWith('/en/')">
      <h1>Oops, page not found 😕</h1>
      <p>This page is empty, just like Shell's climate promises.</p>
      <p></p>
      <div>
        <a href="/">Go home</a>
        <a :href="'https://web.archive.org/web/*/' + currentURL" target="_blank"
          >Archived version</a
        >
      </div>
      <p style="margin-top: 64px">
        <i>
          Activist Handbook is written by volunteers, and sometimes something
          goes wrong. You can help us fix this broken page! Everyone can edit
          our website. Create a new page for this path or edit the broken link.
        </i>
      </p>
      <strong>
        <a href="https://edit.activisthandbook.org/new" target="_blank"
          >Create article</a
        >
      </strong>
    </div>
  </ClientOnly>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vitepress";
const router = useRouter();

let currentURL = ref("");

onMounted(() => {
  currentURL.value = window.location.href;
  // if (router.route.path.startsWith("/en/")) {
  //   router.go(router.route.path.replace("/en/", "/"));
  // }
});
</script>
<style lang="scss" scoped>
.vp-doc {
  text-align: center;
  padding: 96px 16px;
  margin: auto;
  max-width: 512px;

  a {
    margin: 8px 16px;
    display: inline-block;
  }
}
</style>
