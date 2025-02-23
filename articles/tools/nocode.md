---
title: >
  No-code tools for activists
description: >
  Customize your software without writing code
langCode: en
articleID: kj9n-5RraMCyCI1PZmyfgDjeNOLguG3L
languageCollectionID: xDs-i8zKaD9cyC2DXYOH4Yvtgtopgz8w
updatedTimestamp: 1740308412619
createdTimestamp: 1735563899740
wordCount: 1407
---

## Summary

-   **What is it?** A category of tools to make custom software without knowing how to write code.
    
-   **Why use it?** Sometimes existing software doesn’t fit your needs, is too complex, expensive, or simply because you are using too many tools and want to prevent software sprawl.
    
-   **When not to use it?** When there are good established options, when you have never tried a no-code tool within an organization when you’re in a rush.
    

## What is No-Code?

We call “No-code” all the tools that allow us to produce new software without writing new code. These tools are particularly important for activists because they allow small, voluntary-based organizations to have custom software without involving programmers, designers, and other specialists.

Most software is not designed for activists, and the diversity of goals, organizational forms, levels of expertise, and resources available further complicate the matter, rendering software catering to activists often unfit for most use cases.

Learning how to use no-code tools means being able to develop tools fit to your specific needs, and able to evolve very fast and without the traditional barrier between users and developers.

While no-code tools are a compelling option, they come with some drawbacks:

-   Most of these tools struggle to scale beyond a few thousand users.
    
-   They do not offer the same flexibility and control of a programming language, forcing you to compromise on usability and UI, when dealing with the most complex use cases.
    
-   Several tools have lock-in problems, meaning that it’s hard to move away from them after the adoption.
    

_At the time of writing, the landscape of no-code tools keeps evolving quickly, with several new tools appearing every month. Use this guide to make sense of the options available, but make sure to explore on your own too to understand what is currently the best tool for a certain task._

## When to adopt a No-Code Tool

No-code tools have a higher barrier to entry compared to traditional software. In the end, you’re creating something new and exploring if it’s feasible. This might end up wasting your time or producing a sub-par result.

When assessing to adopt a no-code tool over traditional software, make sure to meet the following requirements:

-   At least one person in the organization has experimented with the no-code tools involved before. Otherwise, make sure to account for the time necessary to study and practice before proceeding with the development.
    
-   You’re not in a rush to support a given use case: no-code options are a long-term investment and they shouldn’t be used to replace critical processes on a tight timeline.
    

### Typical Use-Cases

While a no-code approach is best suited to address unconventional scenarios, there are a few problems that inevitably require a level of customization that renders no-code software a better option even when plenty of commercial options are available.

**Contact management (CRM)**

Activist organizations often have to keep track of thousands of contacts: volunteers, donors, organizations, institutions, and so on. CRM tools, as highlighted in the [dedicated guide](https://activisthandbook.org/tools/crm), can go a long way to address the most common scenarios. Nonetheless, after an early adoption, corner cases start emerging and these tools struggle to fit each organization’s specificities.

This is true also in a commercial setting, where this problem gave birth to a whole industry that customizes CRMs and related processes for each company.

Volunteer organizations are no different and you might eventually desire to complement tools like ActionNetwork with tools more integrated with the rest of your stack. This might look like an Airtable or Nocodb database to consolidate your contacts, or maybe like a Zapier or N8n used to create notifications, reports, or reminders about specific contacts. Sometimes it might take instead the shape of a custom UI for volunteers to input contacts, maybe with regional or sectoral adaptations.

**Contact Forms and Sign-ups**

Connected to the previous problem, receiving input from the outside through forms, social media direct messages, tracking RSVPs and sign-ups, and integrating all this information often requires several steps of automation. Each stack is different, each organization has different needs and processes, and you don’t want all this information to go to waste, because often it means being less effective at activating your base.

## Types of No-Code Tools

No code is a broad umbrella. To navigate and make sense of it as a whole, we need to break it down into smaller groups of similar tools that try to solve the same problem.

### Internal Tooling

No-code tools dedicated to Internal Tooling development try to offer all the building blocks to create data structures, interfaces, and automation that are rough but functional and quick to edit. They sacrifice complexity in favor of an easier experience, trying to combine different features like data management, web/mobile UI visual builders, and workflow automation.

[Knack](https://www.knack.com/)

[Glide](https://www.glideapps.com/)

[Softr](https://www.softr.io/)

[Notion](https://www.notion.so)

### Data management

Data Management tools are a natural component of any no-code stack because they are good at structuring, managing, and exporting data. Some of these platforms are particularly open for integration and are a preferable choice when building a no-code solution.

[Airtable](https://airtable.com/)

[Nocodb](https://nocodb.com/)

[Baserow](https://baserow.io/)

For more info, refer to the [Data Apps](https://activisthandbook.org/tools/data-apps) section.

### App Development

Sometimes it is necessary to offer your users, especially people outside your organization, a proper web app or mobile app, with all the bells and whistles, distributable through traditional channels. For such cases, there are dedicated no-code platforms that allow for more customization of the UI and more complexity in handling the flow of interaction. You can sign up and use the app without any knowledge of the no-code architecture behind it.

[Bubble.io](http://Bubble.io)

[Appsmith](https://www.appsmith.com/)

[Flutterflow](https://www.flutterflow.io/)

### Workflow Automation

While many no-code platforms offer automation features and integrate with other services, sometimes it is necessary to have a dedicated tool to tie everything together. From syncing data across services to sending notifications, from scheduled reports to posting on social media, a workflow automation tool can go a long way to lighten the burden of certain processes.

Refer to the dedicated guide on this topic to know more: [https://activisthandbook.org/tools/workflow-automation](https://activisthandbook.org/tools/workflow-automation)

## Example stacks

Navigating the offer of no-code platforms, even with the support of this guide, can be daunting. There are endless options, composable with each other, and finding the best, minimal set of tools for your organization might be challenging.

Here we propose three examples to hint at what a no-code stack looks like in reality.

### Easy start

In established organizations, you might want to try adopting no-code starting from a problem with a narrow and clear scope.

One very simple, entry-level stack would be using:

-   **Knack** to develop a small app with separate views for volunteers and coordinators/curators/committed members.
    
-   **Make** or **Zapier** to automate what Knack cannot handle.
    

This stack has cheap tiers, works well together, and doesn’t overwhelm you with complexity. It does require some time to get up to speed, but it’s a good compromise between the learning curve and the value given to the organization.

### Self-hosted

This stack is the go-to option for organizations that want to have full control over their data and contain costs.

-   **Nocodb** to keep your data, clean it, review it
    
-   **N8n** for all your automation needs
    
-   **Appsmith** if you need to develop more fancy apps
    

### Advanced

If you have some more technical know-how and you have plenty of resources to invest, this stack is more fit for large-scale, complex scenarios.

-   **Baserow** for your data
    
-   **Pipedream** for complex automation
    
-   [**Bubble.io**](http://Bubble.io) to develop complex apps
    

## Workshop

No-code software is easier to learn and adopt with support from experienced people showing you how to solve specific problems. Guides can explain the basic features of a tool, but mapping your problems to a solution requires some guidance.

Some formats you can try to spread know-how about No-Code are:

-   **Use-case-specific end-to-end workshops:** in a single session, introduce people to the tool(s) and develop a small but complete solution to a narrow use case. An example could be an onboarding process with vetting and notifications, or otherwise a small custom CRM.
    
-   **Direct development within an organization:** working on a real problem and addressing real needs is the best way to learn a tool. Joining a dedicated team within an organization to help them develop their no-code solution is a great way to transfer knowledge. Most of the complexity of the initial development is done collectively and during the process, you can teach what they need to become more autonomous in enhancing the solution. It is easier to evolve a working solution than to start from scratch.