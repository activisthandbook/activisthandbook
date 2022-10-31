---
title: Join our team
description: There are many ways to contribute.
sidebar: false
aside: false
focus: true
focusID: "first-name"
focusActionLabel: Sign up
---

Let's build the Wikipedia for activists. Write articles, translate, manage our social media, raise funds, train activists, organise international events and much more.

Activist Handbook is an online platform for change-makers to exchange knowledge. It is written by activists around the world. You can join our team and make it better!

<a @click="focusID('first-name')" class="button">Sign up</a>

## How can I contribute?

Everyone can contribute. We are curious to hear what skills you would like to bring to our team. And we encourage learning new skills:

- 📝 **Write or translate articles**
- 📢 **Help with promotion and outreach**
- 📆 **Organise events**
- 🎬 **Record or edit videos**
- 🎨 **Design illustrations**
- 💻 **Develop open source web apps**
- 🤑 **Find funds or manage our finances**

## Every month, we train 4.000 activists

Change-makers from around the globe read our guides. With your help, we can support even more people who want to make a difference. Our goal is to train a billion activists.

<a @click="focusID('first-name')" class="button">Sign up</a>

## What happens after I sign up?

After you sign up:

1. First, we will schedule **video call** with you to get to know each other.
2. Then you **meet up with your teammates** online or IRL.
3. We will share our **guides for volunteers** to help you get started.

## Who can join?

Everyone! You do not need to be an experienced activist. We will help you get started and give you training.

We believe that diversity strengthens our organisation. We encourage people of all genders, sexual preferences and ethnic backgrounds, including people with disabilities, to join our project.

<ClientOnly>
  <action-volunteer>
    <h2>Get started</h2>
    <p>Together, we're training a billion activists. Join our team and contribute to our global project.</p>
  </action-volunteer>
</ClientOnly>

<script setup>

function focusID(id){
  const element = document.getElementById(id);
  element.focus()
}
</script>
