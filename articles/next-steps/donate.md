---
title: Thank you ❤️
description: Your contribution helps us train activists around the globe.
sidebar: false
aside: false
focus: true
focusHref: "https://api.whatsapp.com/send?text=Did%20you%20know%20about%20Activist%20Handbook%3F%20They%20have%20400%2B%20free%20guides%20for%20change-makers%3A%20https%3A%2F%2Factivisthandbook.org%3Futm_source%3Dwhatsapp%26utm_campaign%3Dnext_steps_donate"
focusActionLabel: Share
---

Multiply your impact by sharing Activist Handbook with others. They can learn more about effective change-making by reading our 400+ free guides:

<a href="https://api.whatsapp.com/send?text=Did%20you%20know%20about%20Activist%20Handbook%3F%20They%20have%20400%2B%20free%20guides%20for%20change-makers%3A%20https%3A%2F%2Factivisthandbook.org%3Futm_source%3Dwhatsapp%26utm_campaign%3Dnext_steps_donate" class="button">Share in WhatsApp</a>

> Did you know about Activist Handbook? They have 400+ free guides for change-makers: https://activisthandbook.org

<script setup>
import { onMounted }  from "vue"

onMounted(() => {
  let actionsTaken = []

  if(localStorage.getItem('actions_taken')) {
    actionsTaken = JSON.parse(localStorage.getItem('actions_taken'));

  }

  if(!actionsTaken.includes("donate")) {
    actionsTaken.push("donate")
  }
  localStorage.setItem('actions_taken', JSON.stringify(actionsTaken));
})
</script>
