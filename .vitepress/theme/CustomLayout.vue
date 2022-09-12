<script setup>
import DefaultTheme from "vitepress/theme";

import AnalyticsComponent from "./AnalyticsComponent.vue";

// DATA
const { Layout } = DefaultTheme;
</script>
<template>
  <Layout>
    <template #doc-before>
      <div class="action-top">
        We're looking for people to <a href="/join">join our team</a>!
      </div>
      <div class="hgroup">
        <h1>{{ $frontmatter.title }}</h1>

        <div class="description">
          {{ $frontmatter.description }}
        </div>
        <div
          class="meta"
          v-if="$frontmatter.wordCount || $frontmatter.lastUpdated"
        >
          <div class="reading-time" v-if="$frontmatter.wordCount">
            {{ 1 + Math.round($frontmatter.wordCount / 300) }} min read
          </div>
          <div class="last-updated" v-if="$frontmatter.lastUpdated">
            Last update:
            {{
              new Intl.DateTimeFormat(undefined, {
                dateStyle: "medium",
              }).format(new Date($frontmatter.lastUpdated))
            }}
            {{}}
          </div>
        </div>
      </div>

      <div class="languages">
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
        <p class="description">
          And you can help us. Join our our international team, or start a local
          group of writers.
        </p>
        <div class="meta"><a href="/join">Join us</a></div>
      </div>
      <footer>
        <div><strong>You can reuse this content!</strong></div>
        <div>
          Just make sure to give attribution to
          <a href="https://activisthandbook.org">Activist Handbook</a> and
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            rel="license"
            target="_blank"
            >read our licence</a
          >
          for the details. Want to use our logo? Read our
          <a href="/support/communication/design-guide">design guide</a>.
        </div>
        <div class="small">
          All our work is available under a Creative Commons
          Attribution-NonCommercial-ShareAlike 4.0 International Licence, unless
          otherwise noted.
        </div>
      </footer>
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
  <ClientOnly>
    <AnalyticsComponent />
  </ClientOnly>
</template>
<style lang="scss" scoped>
// ----
.action-top {
  background: rgba(0, 0, 0, 0.05);
  color: #333;
  padding: calc(8px + 0.5vw) calc(8px + 1vw);
  font-style: italic;
  margin-bottom: 16px;
  border-radius: 2px;
  text-align: center;

  a{
    text-decoration: underline;
  }
}
.hgroup,
.call-to-action,
footer {
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

  .meta {
    margin-top: calc(8px + 0.5vw);
    display: flex;

    .reading-time,
    .last-updated,
    a {
      display: block;
      background: var(--vp-c-white);
      color: var(--vp-c-black);
      padding: calc(4px + 0.4vw) calc(6px + 0.5vw);
      font-size: calc(8px + 0.4vw);
      line-height: 1em;
      margin: 0;
      letter-spacing: 0.5px;
    }

    .reading-time {
      margin-right: calc(6px + 0.5vw);
    }

    .last-updated {
      opacity: 0.8;
    }

    a {
      margin-bottom: calc(4px + 0.4vw);
      padding: calc(6px + 0.4vw) calc(12px + 0.5vw);
      font-size: calc(12px + 1vw);
      box-shadow: calc(4px + 0.4vw) calc(4px + 0.4vw) 0 black;
      &:hover {
        opacity: 0.9;
      }
    }
  }
}
.hgroup {
  margin-bottom: calc(8px + 0.5vw);
  background-color: var(--vp-c-brand);
}
.languages {
  opacity: 0.8;
  font-size: 0.85em;
}
footer {
  text-align: center;
  color: black;
  background: var(--vp-c-bg-alt);

  font-family: var(--vp-font-family-base);
  font-size: 0.9em;

  a {
    text-decoration: underline;
  }

  .small {
    max-width: 424px;
    margin: auto;
    margin-top: 16px;
    opacity: 0.7;
    font-size: 0.8em;
    line-height: 1.5;
  }
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

  @media only screen and (max-width: 600px) {
    bottom: 12px;
    right: 12px;
    border-radius: 28px;
    padding: 12px;

    svg {
      width: 28px;
      height: 28px;
    }
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

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    padding: 2px 4px;
    right: 76px;
    bottom: 24px;
  }
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
