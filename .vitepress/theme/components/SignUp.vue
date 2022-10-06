<template>
  <form class="call-to-action form" id="signup" :class="{loading: loading}">
    <h1 @click="test">Get started</h1>
    <div>Together, we're training a billion activists. Join our team and contribute to our global project.</div>
    <label>
      <div>First name</div>
      <input v-model="user.given_name" placeholder="Lisa" autocomplete="given-name" id="first-name" required/>
    </label>
    <label>
      <div>Email</div>
      <input v-model="user.email_addresses[0].address" placeholder="lisa@email.com" autocomplete="email" type="email" required/>
    </label>
    <label>
      <div>Phone number (international format)</div>
      <input v-model="user.phone_number[0].number" placeholder="+XX 1234567890" autocomplete="tel" type="tel" required/>
    </label>
    <div class="privacy">After you sign up, we will reach out to you to help you get started. We'll contact you every now and then about our upcoming events, vacancies, and fundraising campaigns.</div>
    <div class="meta">
      <button @click="signUp($event)" type="submit">Sign up</button>
    </div>
  </form>


</template>
<script setup>
import party from "party-js";

import { reactive, ref, nextTick, watch } from "vue";
import { useRouter } from "vitepress";
const router = useRouter();

const loading = ref(false)

const user = reactive({
  given_name: null,
  email_addresses: [{address: null}],
  phone_number: [{ number: null }],
});

async function signUp(event){
  if(user.given_name && user.email_addresses[0].address && user.phone_number[0].number){
    event.preventDefault()

    loading.value = true

    await fetch('https://europe-west1-rebeltools-write.cloudfunctions.net/updateSubscriber', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'X-MyHeader': '123'
      },
      body: JSON.stringify({
        person: {
          family_name: "Smith",
          given_name: "John",
          postal_addresses: [{ postal_code: "20009" }],
          email_addresses: [{ address: "jsmith@mail.com" }],
          phone_number: [{ number: "12021234444" }],
        },
        add_tags: ["volunteer", "member"],
      })
    })
      .then(async(response) => {
        loading.value = false
        console.log('Success:', response);
        await router.go(`/next-steps/signup-volunteer`)

        party.confetti(document.querySelector(".VPDoc"), {
          color: party.Color.fromHex("#D70057"),
          count: 30,
          size: 3,
        });

        localStorage.setItem('given_name', user.given_name);
        localStorage.setItem('email_address', user.email_addresses[0].address);
        localStorage.setItem('phone_number', user.phone_number);
      })
      .catch((error) => {
        console.error('Error:', error);
      });


  }


}

</script>
<style scoped lang="scss">
.call-to-action.form{
  margin-top: 24px;
  font-family: var(--vp-font-family-base);

  &.loading{
    opacity: .7;
    cursor: wait;


    *{
    pointer-events: none;}

  }

  label{
    display: block;
    margin-top: 12px;
    font-size: calc(12px + 0.5vw);
    font-family: var(--vp-font-family-headings);
  }
  input, button{
    padding: calc(12px + 0.1vw);
    display: block;
    width: 100%;
    // border:2px solid var(--vp-c-white);
    background: var(--vp-c-white);
    color: black;
    font-size: calc(15px + 0.5vw);

    &::placeholder {
      color: grey;
      opacity: 1;
    }
  }
  input{
    border: 2px solid var(--vp-c-white);
    &:hover{
      border-color:#ccc ;
    }
    &:focus{
      border-color: black;
    }
  }

  button{
    margin: calc(8px + 0.5vw) auto !important;
    width: auto;
    padding: calc(12px + 0.5vw) 10% !important;
    font-family: var(--vp-font-family-headings);
  }
  button[disabled]{
    opacity: .5;
  }
}


.privacy{
  margin-top: 32px;
  font-size: 15px;
}

.loader{
  text-align: center;
  margin: 8px 0;
}
.loader span{
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
}
</style>
