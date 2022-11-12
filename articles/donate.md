---
title: Donate to Activist Handbook
description: Help us train a billion activists
sidebar: false
aside: false
focus: true
focusID: "donate-form"
focusActionLabel: Donate
---

Activist Handbook trains change-makers around the globe. We are a non-profit that depends on donations to stay online and thriving. Donate today and help us make a positive impact for years to come.

<action-button buttonlabel="test" buttonlink="test"/>
<a @click="focusID('donate-form')" class="button">Support us & donate</a>

> I'll be blunt: We're in deep shit. The climate crisis and the mass extinction of species require radical action. The wealthiest top 1% keeps getting richer, and the rest of us pay the price.
>
> We need a billion activists to speak up and fight against injustice. With your help, we can train those who want to make a change. Your donation can make the difference. **We appreciate any contribution, no matter how small.**
>
> — Joppe Hoekstra, co-founder Activist Handbook

## Support our project

Activist Handbook is a highly efficient nonprofit organisation, making a maximum impact with a minimal budget. As grassroots activists, we are used to getting the most out of limited resources. **This is where your donation goes:**

- **🔗 Keeping our website online:** We believe Activist Handbook should always stay free, and without ads. Your donation allows us to pay for our web hosting and build new digital tools that help activist around the globe.
- **❤️ Making activism accessible to everyone:** We want to include the experiences of activists around the globe in our handbook. But not everyone can afford to work as a volunteer, or even to pay for the required internet connection. Your donation makes our organisation more inclusive.
- **🌍 Connecting activists around the globe:** We are enabling movements around the globe to exchange knowledge on change-making. That requires us to pay for digital tools that allow us to work together internationally. And to compensate the travel costs of those who cannot afford to pay for it themselves. Your donation brings together activists around the globe.

## Every month, we train 4.000 activists

Change-makers from around the globe read our guides. With your help, we can support even more people who want to make a difference. Our goal is to train a billion activists.

<ClientOnly>
  <action-donate>
    <h2>Donate</h2>
  </action-donate>
</ClientOnly>

_Your donation goes to the Activist Handbook Foundation, a registered nonprofit organisation in the Netherlands (Stichting Activist Handbook, KvK-number 86029045)._

<script setup>
import {onMounted, ref} from "vue"

const given_name = ref(null)

onMounted(() => {
  given_name.value = localStorage.getItem('given_name');
})

function focusID(id){
  const element = document.getElementById(id);
  element.focus()
}
</script>
