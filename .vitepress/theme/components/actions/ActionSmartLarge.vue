<template>
  <form class="call-to-action form action-signup primary-action" id="action-signup" :class="{ loading: loading }"
    tabindex="0">
    <h1>Subscribe to our newsletter 🔔</h1>
    <p>Receive new guides for activists straight in your inbox.</p>
    <client-only>
      <label>
        <div>First name</div>
        <input v-model="user.firstName" placeholder="Lisa" autocomplete="given-name" id="first-name" required />
      </label>
      <label>
        <div>Email</div>
        <input v-model="user.email" placeholder="lisa@email.com" autocomplete="email" type="email" required />
      </label>
      <!-- <label> -->
      <!-- <div>Phone number (international format)</div> -->
      <!-- <input v-model="user.phone" placeholder="+XX 1234567890" autocomplete="tel" type="tel" required /> -->
      <!-- </label> -->

      <div class="meta" v-if="!loading">
        <button @click="signUp($event)" type="submit">Sign up</button>
      </div>
      <div class="spinner" v-else>
        <span></span>
      </div>
    </client-only>

  </form>

  <div class="call-to-action primary-action black" tabindex="0" id="action-smart-large">
    <h1>Get free personal campaign advice ☎️</h1>
    <p class="description">
      Free hotline for activists. Get help from one of our trainers. Schedule a 1 hour call. Support by
      experienced campaigners.
    </p>
    <div class="meta">
      <a href="/schedule-call" class="promo-smart-large"> 📞 Schedule call</a>
    </div>
  </div>
  <div class="call-to-action primary-action red" tabindex="0" id="action-smart-large">
    <h1>We're building the Wikipedia for activists</h1>
    <p class="description">
      And you can help us. Join our our international team, or start a local
      group of writers.
    </p>
    <div class="meta">
      <a href="/join" class="promo-smart-large">👉 Join us</a>
    </div>
  </div>
</template>
<script setup>
import party from "party-js";

import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vitepress";
const router = useRouter();

const loading = ref(false)

const user = reactive({
  firstName: null,
  email: null,
  // phone: null,
});

const tags = ["newsletter", "free-guides"]

const redirect = "/next-steps/signup-350-campaign"

onMounted(() => {

  if (localStorage.getItem('given_name')) {
    user.firstName = localStorage.getItem('given_name');
  }

  if (sessionStorage.getItem('email_address')) {
    user.email = sessionStorage.getItem('email_address');
  }
  // if (sessionStorage.getItem('phone_number')) {
  //   user.phone = sessionStorage.getItem('phone_number');
  // }
})

async function signUp(event) {
  if (user.firstName && user.email) {

    event.preventDefault()

    loading.value = true

    // TO-DO: Change url
    await fetch('https://activisthandbook.org/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({
        firstName: user.firstName,
        email: user.email,
        // phone: user.phone,
        tags
      })
    })
      .then((response) => response.json())
      .then(async (data) => {
        loading.value = false
        console.log('Success:', data);
        await router.go(redirect)

        party.confetti(document.querySelector(".VPDoc"), {
          color: party.Color.fromHex("#D70057"),
          count: 30,
          size: 2,
        });

        localStorage.setItem('given_name', user.firstName);
        sessionStorage.setItem('email_address', user.email);
        // sessionStorage.setItem('phone_number', user.phone);

        let actionsTaken = JSON.parse(localStorage.getItem('actions_taken'));
        console.log('actionsTaken:', actionsTaken)
        if (!actionsTaken) {
          actionsTaken = []
        }
        if (!actionsTaken.includes("volunteer")) {
          actionsTaken.push("volunteer")
        }
        localStorage.setItem('actions_taken', JSON.stringify(actionsTaken));
      })
      .catch(error => {
        console.error(error)
      })

  }
}
</script>

<style scoped lang="scss">
.form {

  h1 {
    font-family: var(--vp-font-family-headings);
  }

  ;

  p {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 32px;
  }
}

.red {
  background: var(--vp-c-brand)
}

.black {
  background: black;
}
</style>
