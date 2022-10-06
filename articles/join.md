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

## What happens after I sign up?

After you **<a @click="focusID('first-name')">sign up</a>**:

1. First, we will schedule **video call** with you to get to know each other.
2. Then you **meet up with your teammates** online or IRL.
3. We will share our **guides for volunteers** to help you get started.

## Who can join?

Everyone! We believe that diversity strengthens our organisation. That is why we encourage people of all genders, sexual preferences and ethnic backgrounds, including people with disabilities, to join our project.

<ClientOnly>
  <SignUp/>
</ClientOnly>

<script setup>
import SignUp from "../.vitepress/theme/components/SignUp.vue";

function focusID(id){
  const element = document.getElementById(id);
  element.focus()
}
</script>

<style lang="scss">
.focus-mode {
  .button{
    cursor: pointer;
    display: inline-block;
    background: var(--vp-c-secondary);
    color: var(--vp-c-white) !important;
    font-family: var(--vp-font-family-headings);
    font-size: calc(10px + 0.4vw);
    line-height: 1em;
    letter-spacing: 0.5px;
    border-bottom: none;
    margin-bottom: calc(4px + 0.4vw);
    padding: calc(12px + 0.4vw) calc(24px + 0.5vw);
    font-size: calc(12px + 1vw);
    box-shadow: calc(4px + 0.4vw) calc(4px + 0.4vw) 0 black;
    transition: .2s box-shadow !important;

    &:hover {
      box-shadow: calc(8px + 0.4vw) calc(8px + 0.4vw) 0 black;
      color: var(--vp-c-brand)
    }
  }
}
</style>
