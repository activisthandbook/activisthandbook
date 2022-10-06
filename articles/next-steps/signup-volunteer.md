---
title: Next steps
description: Get started as volunteer
sidebar: false
aside: false
focus: true
focusID: "donate-form"
focusActionLabel: Donate
---

**Welcome to our team! All of us chip in to keep Activist Handbook online and thriving. If you can afford it, make a small contribution to our Solidarity Fund<span v-show="given_name">, {{ given_name }}</span>.**

Our Solidarity Fund helps us make more impact together. It makes Activist Handbook more inclusive. We all contribute whatever we can afford to give.

<a @click="focusID('donate-form')" class="button">Ok, I'll donate too!</a>

## Our Solidarity Fund

We decide together how to spend money in our Solidarity Fund:

- **❤️ Make Activist Handbook accessible to everyone:** We want to include the experiences of activists around the globe in our handbook. But not everyone can afford to work as a volunteer, or even to pay for the required internet connection. Your donation makes our organisation more inclusive.
- **🌍 Connect activists around the globe:** We are enabling movements around the globe to exchange knowledge on change-making. That requires us to pay for digital tools that allow us to work together internationally. And to compensate the travel costs of those who cannot afford to pay for it themselves. Your contribution brings together activists around the globe.
- **💪 Keep Activist Handbook independent:** We do not want to depend 100% on other organisations to stay alive. To keep Activist Handbook online and thriving, it is important to have a constant and reliable income source. With the solidarity fund, we can keep making ambitious and radical plans to change the world for the better.

## What if I cannot contribute?

That's completely fine<span v-show="given_name">, {{ given_name }}</span>. We want to make Activist Handbook inclusive for everyone. If you ever need money to join our events or meetings (to reimburse travel or internet costs), send us a message.

<ClientOnly>
  <DonateForm/>
</ClientOnly>

_Your donation goes to the Activist Handbook Foundation, a registered nonprofit organisation in the Netherlands (Stichting Activist Handbook, KvK-number 86029045)._

<script setup>
import {onMounted, ref} from "vue"

const given_name = ref(null)

onMounted(() => {
  given_name.value = localStorage.getItem('given_name');
})

import DonateForm from "../../.vitepress/theme/components/DonateForm.vue";
function focusID(id){
  const element = document.getElementById(id);
  element.focus()
}
</script>
