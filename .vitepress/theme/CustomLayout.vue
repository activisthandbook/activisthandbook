<script setup>
import DefaultTheme from "vitepress/theme";

import {onMounted, ref, watch } from "vue"
import { useRouter, useData } from "vitepress";
const router = useRouter();
const { frontmatter } = useData();
const data = useData();

import AnalyticsComponent from "./components/AnalyticsComponent.vue";
import ActionSmartLarge from "./components/actions/ActionSmartLarge.vue";
import SiteSearch from "./components/SiteSearch.vue";

const languageCollection = ref(null)

onMounted(() => {
  getLanguages()
  // setLanguage()
  function watchForHover() {
    // lastTouchTime is used for ignoring emulated mousemove events
    // that are fired after touchstart events. Since they're
    // indistinguishable from real events, we use the fact that they're
    // fired a few milliseconds after touchstart to filter them.
    let lastTouchTime = 0

    function enableHover() {
      if (new Date() - lastTouchTime < 500) return
      document.body.classList.add('hasHover')
    }

    function disableHover() {
      document.body.classList.remove('hasHover')
    }

    function updateLastTouchTime() {
      lastTouchTime = new Date()
    }

    document.addEventListener('touchstart', updateLastTouchTime, true)
    document.addEventListener('touchstart', disableHover, true)
    document.addEventListener('mousemove', enableHover, true)

    enableHover()
  }

  watchForHover()
})

watch(
  () => router,
  () => {
    // setLanguage()
    getLanguages()

  },
  { deep: true }
)
function getLanguages(){
  if(data.frontmatter.value.languageCollectionID) {
  fetch("/languageCollections/" + data.frontmatter.value.languageCollectionID + ".json")
      .then((response) => response.json())
      .then((json) => {
        languageCollection.value = json
      });
  }
}

// DATA
const { Layout } = DefaultTheme;

function focusID(id){
  const element = document.getElementById(id);
  element.focus()
}
</script>
<template>

  <div :class="{ 'focus-mode': $frontmatter.focus }">
    <Layout>
      <template #nav-bar-content-before>
        <ClientOnly>
          <SiteSearch />
        </ClientOnly>
      </template>
      <template #nav-bar-content-after>
        <nav
          aria-labelledby="main-nav-aria-label"
          class="VPNavBarMenu menu focus-menu"
          v-if="$frontmatter.focus"
        >
          <a
            class="VPLink link VPNavBarMenuLink"
            @click="focusID($frontmatter.focusID)"
            style="display: flex; font-size: 14px"
            :href="$frontmatter.focusHref"
          >
            {{ $frontmatter.focusActionLabel }}
          </a>
        </nav>
      </template>

      <template #doc-before>
        <div class="action-top" v-if="!$frontmatter.focus">
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

        <div class="languages" v-if="$frontmatter.languageCollectionID">
          Languages: <span v-if="languageCollection">
            <span v-for="(language, index) in languageCollection" :key="index">
              <a :href="'/' + language.fullPublishedPath">{{language.localName}}</a>
              <span v-if="languageCollection.length > 1 && languageCollection.length !== index + 1">, </span>
            </span> |

          <a :href="
              'https://edit.activisthandbook.org/translate/' +
              $frontmatter.languageCollectionID
            " target="_blank"> Add translation </a></span>
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
        <ActionSmartLarge v-if="!$frontmatter.focus" />

        <div v-if="!$frontmatter.focus" class="licence">
          <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              rel="license"
              target="_blank"
              ><img src="/by-nc-sa.svg" alt="Creative Commons Attribution-NonCommercial-ShareAlike logo" width="120" height="42" style="display:inline;margin-bottom:8px"/></a>
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
            Attribution-NonCommercial-ShareAlike 4.0 International Licence,
            unless otherwise noted.
          </div>
          <div class="actions">
            <a :href="'https://edit.activisthandbook.org/article/' +
                $frontmatter.articleID" target="_blank">📝 Edit</a>
            <a :href="
              'https://edit.activisthandbook.org/translate/' +
              $frontmatter.languageCollectionID" target="_blank">🌐 Add translation</a>
            <a href="https://edit.activisthandbook.org/new" target="_blank">➕ New article</a>
            <a href="https://edit.activisthandbook.org/authors" target="_blank">👋 Authors</a>
          </div>
        </div>


      </template>
      <template #layout-bottom>

        <footer>

          <div v-if="!$frontmatter.focus && $frontmatter.articleID">
            <a
              :href="
                'https://edit.activisthandbook.org/article/' +
                $frontmatter.articleID
              "
              target="_blank"
              class="edit-button"
              aria-label="Edit article"
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
          </div>



          <ClientOnly>
            <AnalyticsComponent />
          </ClientOnly>

        </footer>


        <!-- <div id="analytics-scroll-trigger"></div> -->
      </template>
    </Layout>
  </div>
</template>
<style lang="scss" scoped>
.action-top {
  background: rgba(0, 0, 0, 0.05);
  color: #333;
  padding: calc(12px + 0.5vw) calc(8px + 1vw);
  font-style: italic;
  margin-bottom: 16px;
  border-radius: 2px;
  text-align: center;

  a {
    text-decoration: underline;
    color: black;
  }
}

@media (min-width: 960px) {
  .has-sidebar + footer {
    margin-left: 300px;
  }
}
footer {
  border-top:1px solid var(--vp-c-bg-alt);
  padding: 24px;
  text-align: center;

  nav{
    margin-bottom: 8px;
    font-family: var(--vp-font-family-headings);
  }
}
.licence {
  max-width: 688px;
  margin: 0 auto 32px auto;
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

  .actions{
    margin-top: 16px;
    font-size: 0.8rem;
    a{
      color: var(--vp-c-secondary);
      font-family: var(--vp-font-family-headings) ;
      text-decoration: none;
      padding: 4px 8px;
      border-radius: 1px;
      margin:4px 8px;
      display: inline-block;

      &:hover{
        background: var(--vp-c-secondary);
        color: var(--vp-c-white)
      }
    }
  }
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
  animation: edit-hint 7s ease 6s forwards;
  z-index: 100;
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
// .Layout{
// position:relative
// }
// #analytics-scroll-trigger{
//   position: absolute;
//   bottom: 0;
//   height: 15%;
//   width: 10px;
//   z-index: 1000;
//   background: red;
// }
</style>
