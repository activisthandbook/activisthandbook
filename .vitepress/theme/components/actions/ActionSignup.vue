<template>
  <form class="call-to-action form action-signup primary-action" id="action-signup" :class="{loading: loading}" tabindex="0">
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
      <div class="privacy">After you sign up, we will reach out to you every now and then about upcoming events near you, ways to contribute, fundraising campaigns and other updates.</div>
      <div class="meta" v-if="!loading">
        <button @click="signUp($event)" type="submit">{{buttonlabel}}</button>
      </div>
      <div class="spinner" v-else>
        <span></span>
      </div>
    </client-only>

  </form>


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
  phone: null,
});

const props = defineProps(["tags", "redirect", "buttonlabel"])

onMounted(() => {

  if(localStorage.getItem('given_name')){
    user.firstName = localStorage.getItem('given_name');
  }

  if(sessionStorage.getItem('email_address')){
    user.email = sessionStorage.getItem('email_address');
  }
  if(sessionStorage.getItem('phone_number')){
    user.phone = sessionStorage.getItem('phone_number');
  }
})

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
          tags: props.tags.split(','),
        })
      })
        .then((response) => response.json())
        .then(async (data) => {
          loading.value = false
          console.log('Success:', data);
          await router.go(props.redirect)

          party.confetti(document.querySelector(".VPDoc"), {
            color: party.Color.fromHex("#D70057"),
            count: 30,
            size: 2,
          });

          localStorage.setItem('given_name', user.firstName);
          sessionStorage.setItem('email_address', user.email);
          sessionStorage.setItem('phone_number', user.phone);

          let actionsTaken = JSON.parse(localStorage.getItem('actions_taken'));
          console.log('actionsTaken:', actionsTaken)
          if(!actionsTaken){
            actionsTaken = []
          }
          if(!actionsTaken.includes("volunteer")) {
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
