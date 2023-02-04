<script setup>
// IMPORTS
import throttle from "lodash/throttle";

import { reactive, ref, nextTick, watch } from "vue";
import { useRouter } from "vitepress";
const router = useRouter();

import algoliasearch from "algoliasearch/lite";

// Connect and authenticate with your Algolia app
const client = algoliasearch(
  "7G6S9ZTMJU", // Application ID
  "78fc4828e167a2e0b19a4b7d3295e1d7" // Public search-only api key
);

// Create a new index and add a record
const articlesSearchIndex = client.initIndex("activisthandbook_articles");

// DATA
const state = reactive({
  searchQuery: null,
  showSearchDialog: false,
  typedSinceEnter: false,
  searchResults: null,
  cashedSearchResults: {},
  selectedResult: 0,
  noResults: false,
});

const search = ref(null);

async function openSearchDialog() {
  state.showSearchDialog = true;
  await nextTick();
  search.value.focus();
}
function closeSearchDialog() {
  state.showSearchDialog = false;
  state.searchQuery = null;
  state.searchResults = null;
  state.noResults = false;
}
function searchArticles() {
  // Search the index and print the results
  state.noResults = false;

  if (state.cashedSearchResults[state.searchQuery]) {
    state.searchResults = state.cashedSearchResults[state.searchQuery].hits;
    state.noResults = state.cashedSearchResults[state.searchQuery].noResults;
  } else {
    articlesSearchIndex.search(state.searchQuery).then(({ hits }) => {
      state.searchResults = hits;
      state.cashedSearchResults[state.searchQuery] = {};
      state.cashedSearchResults[state.searchQuery].hits = hits;

      if (!hits[0]) {
        state.noResults = true;
        state.cashedSearchResults[state.searchQuery].noResults = true;
      } else {
        state.cashedSearchResults[state.searchQuery].noResults = false;
      }
    });
  }
}

function handleEnter() {
  if (state.searchResults && state.typedSinceEnter) {
    goToArticle(state.searchResults[0].publishedFullPath);
    closeSearchDialog();
  } else searchArticles();
}

function handleInput() {
  state.typedSinceEnter = true
  if (!state.searchQuery) {
    state.searchResults = null;
  }

  if (state.cashedSearchResults[state.searchQuery]) {
    searchArticles();
  } else if (state.searchQuery.length > 2) {
    // Uncomment the line below for immediate search results as you are typing (warning: potentially high costs!)
    // throttledSearch();
  }
}

const throttledSearch = throttle(
  function () {
    searchArticles();
  },
  3000,
  { trailing: true }
);

function goToArticle(publishedFullPath) {
  search.value.blur();
  router.go('/' + publishedFullPath);
  state.showSearchDialog = false;
  state.searchResults = null;
  state.noResults = false;
  state.searchQuery = null
}
</script>
<template>
  <div class="search">
    <span
      class="search-button button"
      @click="openSearchDialog()"
      @keydown.enter="openSearchDialog()"
      tabindex="0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"
        />
      </svg>
    </span>

    <div class="search-mobile" :class="{ show: state.showSearchDialog }">
      <div class="items-center">
        <div class="search-positioning">
          <input
            v-model="state.searchQuery"
            placeholder="Search 450+ guides..."
            ref="search"
            @keydown.enter="handleEnter()"
            @input="handleInput()"
            @focus="$event.target.select()"
          />
          <div class="suggestions" v-if="!state.searchQuery">
            <div>
              <i>For example, look up how to <strong>organise protest</strong>,
              <strong>manage social media</strong> or
              <strong>prevent burnout</strong></i>
            </div>
            <div class="impressive-numbers">
              450 guides | 4.7K external resources
            </div>
          </div>
          <div class="results" v-else>
            <div v-if="!state.searchResults">
              <i>Hit enter to search.</i>
            </div>
            <div v-else-if="state.noResults">
              <i>Nothing found. Try using some different words.</i>
            </div>
            <div
              class="result"
              v-for="(result, index) in state.searchResults"
              :key="index"
              @click="goToArticle(result.publishedFullPath)"
              @keyup.enter="goToArticle(result.publishedFullPath)"
              :class="{ selected: state.selectedResult === index }"
              tabindex="0"
            >
              <div>
                <strong>{{ result.title }}</strong>
                <div>{{ result.description }}</div>
              </div>
            </div>
          </div>
        </div>
        <span
          class="close-button button"
          @click="closeSearchDialog()"
          @keydown.enter="closeSearchDialog()"
          tabindex="0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.search {
  // justify-self: left;
  margin-right: auto;
  padding: 0 24px;
  flex-grow: 1;
  max-width: 448px;
  display: flex;
  align-items: center;

  .items-center {
    display: flex;
    align-items: center;
  }

  .button {
    cursor: pointer;
    padding: 4px;
    border-radius: 18px;
    transition: 0.2s background-color;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .search-button,
  .close-button {
    display: none;
  }

  .search-mobile {
    flex-grow: 1;
  }

  .search-positioning {
    flex-grow: 1;
    position: relative;
  }

  input {
    font-family: var(--vp-font-family-headings);
    background-color: var(--vp-c-bg-alt);
    font-size: 16px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 1px;
    padding: 6px 12px;
    width: 100%;
    transition: 0.1s border-color;

    &::placeholder {
      color: black;
      opacity: 1;
    }
    &:hover {
      border-color: rgba(0, 0, 0, 0.5);
    }
    &:focus {
      border-color: var(--vp-c-secondary);
    }
    &:focus::placeholder {
      opacity: 0.5;
    }
  }

  .suggestions,
  .results {
    position: absolute;

    padding: 16px;
    border-radius: 2px;
    width: 100%;

    background: var(--vp-c-bg);
    box-shadow: var(--vp-shadow-3);
  }
  .suggestions {
    display: none;

    .impressive-numbers{
      margin-top: 8px;
      font-size: 12px;
      color: #555;
    }
  }

  input:focus + .suggestions {
    display: block;
  }

  @media only screen and (min-width: 765px) and (max-width: 1030px),
    (max-width: 570px) {
    margin-right: 0 !important;
    flex-grow: 0 !important;

    .search-mobile {
      display: none;
      position: fixed;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 100;
      padding: 16px;
      background: var(--vp-c-white);
    }
    .search-mobile.show {
      display: block;

      .close-button {
        display: block;
        margin-left: 12px;
      }
    }

    .search-button {
      display: block !important;
    }
  }

  .results {
    .result {
      display: block;
      padding: 8px 16px;
      border-radius: 2px;
      cursor: pointer;
      margin-bottom: 4px;
      border: 1px solid var(--vp-c-white);

      &:focus,
      &.selected {
        background: var(--vp-c-secondary);
        color: var(--vp-c-white);
      }

      &:focus {
        outline: 1px solid black;
        background: var(--vp-c-secondary) !important;
        color: var(--vp-c-white) !important;
      }

      &:hover:not(:focus):not(.selected) {
        background: rgba(0, 0, 0, 0.1);
      }
    }
    &:has(.result:focus) .result.selected {
      background: none;
      color: black;
    }
  }
}

.VPNavBar .content {
  backdrop-filter: none !important;
}
</style>
