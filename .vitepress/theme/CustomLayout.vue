<script setup>
import { onMounted } from 'vue'

import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme

console.log(Layout)

onMounted(() => {})
</script>

<template>
  <Layout>
    <template #doc-before>
      <div class="hgroup">
        <h1>{{ $frontmatter.title }}</h1>

        <div class="description">
          {{ $frontmatter.description }}
        </div>
      </div>

      <div class="meta">
        Languages: Nederlands, Deutch

        <a href=""> Add translation </a>
      </div>
    </template>
    <template #doc-after>
      <!-- <div class="call-to-action">
        <h1>Donate</h1>
        <p class="description">Make a small contribution to help keep Activist Handbook online and thriving:</p>
      </div> -->
      <!-- <div class="call-to-action">
        <h1>Join us</h1>
        <p class="description">Activist Handbook is written by people like you. Join our global community of change-makers:</p>
      </div> -->
      <!-- <div class="call-to-action">
        <h1>Edit me</h1>
        <p class="description">This article was written by activists around the world. You can contribute too!</p>
      </div> -->
      <div class="call-to-action">
        <h1>We're building the Wikipedia for activists</h1>
        <p class="description">And you can help us. Join our team.</p>
      </div>
      <a
        :href="
          'https://edit.activisthandbook.org/article/' + $frontmatter.articleID
        "
        class="edit-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25Z"
          />
        </svg>
      </a>
      <div class="edit-hint">Improve this page!</div>
    </template>
  </Layout>
</template>
<style lang="scss" scoped>
.hgroup,
.call-to-action {
  color: var(--vp-c-white);
  padding: calc(8px + 2vw);
  border-radius: 2px;
  font-family: var(--vp-font-family-headings);

  h1 {
    margin-bottom: calc(8px + 0.5vw);
    // font-size: 52px;
    font-size: calc(24px + 2vw);
    //  font-size: 100%;
    line-height: 1;
  }

  .description {
    font-size: calc(12px + 1vw);
    line-height: 1.2;
    opacity: 0.9;
  }

  .edit a {
    background: var(--vp-c-white);
    color: var(--vp-c-black);
  }
}
.hgroup {
  margin-bottom: calc(8px + 0.5vw);
  background-color: var(--vp-c-brand);
}
.meta {
  opacity: 0.8;
  font-size: 0.85em;
}
.call-to-action {
  margin: 48px 0;
  background-color: var(--vp-c-secondary);
}
.edit-button {
  animation: edit-button-jump 0.5s ease;
  transition: 0.1s transform;
  position: fixed;
  background-color: var(--vp-c-secondary);
  color: var(--vp-c-white);
  padding: 16px;
  bottom: 16px;
  right: 16px;
  border-radius: 32px;
  z-index: 20;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.05);
    opacity: 0.8;
  }
}
.edit-hint {
  opacity: 0;
  font-family: var(--vp-font-family-headings);
  font-weight: 700;
  position: fixed;
  animation: edit-hint 7s ease 1s forwards;
  bottom: 32px;
  right: 90px;
  padding: 4px 8px;
  border-radius: 1px;
  background-color: var(--vp-c-secondary);
  color: var(--vp-c-white);
}

@keyframes edit-button-jump {
  0% {
    transform: scale(0.8);
  }
  70% {
    transform: scale(1.05);
  }
  80% {
    transform: scale(0.99);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes edit-hint {
  0% {
    opacity: 0;
    transform: translateX(16px);
  }
  10% {
    opacity: 1;
    transform: translateX(0);
  }
  90% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(12px);
  }
}
</style>