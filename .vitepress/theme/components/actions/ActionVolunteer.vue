<template>
  <form class="call-to-action form action-volunteer" id="signup" :class="{loading: loading}">
    <slot/>
    <client-only>
      <label>
        <div>First name</div>
        <input v-model="user.firstName" placeholder="Lisa" autocomplete="given-name" id="first-name" required/>
      </label>
      <label>
        <div>Email</div>
        <input v-model="user.email" placeholder="lisa@email.com" autocomplete="email" type="email" required/>
      </label>
      <label>
        <div>Phone number (international format)</div>
        <input v-model="user.phone" placeholder="+XX 1234567890" autocomplete="tel" type="tel" required/>
      </label>
      <div class="privacy">After you sign up, we will reach out to you to help you get started. We'll contact you every now and then about our upcoming events, vacancies, and fundraising campaigns.</div>
      <div class="meta" v-if="!loading">
        <button @click="signUp($event)" type="submit">Sign up</button>
      </div>
      <div class="spinner" v-else>
        <span></span>
      </div>
    </client-only>

  </form>


</template>
<script setup>
import party from "party-js";

import { reactive, ref } from "vue";
import { useRouter } from "vitepress";
const router = useRouter();

const loading = ref(false)

const user = reactive({
  firstName: null,
  email: null,
  phone: null,
});

async function signUp(event){
  if(user.firstName && user.email && user.phone){

    event.preventDefault()

    loading.value = true

    // TO-DO: Change url
    await fetch('https://new.activisthandbook.org/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({
          firstName: user.firstName,
          email: user.email,
          phone: user.phone,
          tags: ["interested-in-volunteering", "newsletter"],
        })
      })
        .then((response) => response.json())
        .then(async (data) => {
          loading.value = false
          console.log('Success:', data);
          await router.go(`/next-steps/signup-volunteer`)

          party.confetti(document.querySelector(".VPDoc"), {
            color: party.Color.fromHex("#D70057"),
            count: 30,
            size: 2,
          });

          localStorage.setItem('given_name', user.firstName);
          sessionStorage.setItem('email_address', user.email);
          sessionStorage.setItem('phone_number', user.phone);

          const actionsTaken = JSON.parse(localStorage.getItem('actions_taken'));
          localStorage.setItem('actions_taken', JSON.stringify(actionsTaken.push("volunteer")));
        })
        .catch(error => {
          console.error(error)
        })

  }
}
</script>
