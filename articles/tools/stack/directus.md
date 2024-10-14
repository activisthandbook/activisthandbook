---
title: >
  Tech stack: Directus campaign platform
description: >
  Use Directus as CMS and CRM for flexibility &amp; affordability on large scale
langCode: en
articleID: D-pNTtxzXvWNIYGjPLOSdjXGUFOpbc5C
languageCollectionID: BAJ0wF_W1QB_cKigJKeQrK4bs_rIv8UZ
updatedTimestamp: 1728897795442
createdTimestamp: 1721543108556
wordCount: 2599
---

In this guide, we explain how you can use Directus to build a campaign platform for grassroots movements. Manage your website content, create event signup forms, and use it as your decentralised organizing CRM.

> **Our honest approach**
> 
> Activist Handbook is written by volunteers. We do not get paid anything for talking about Directus or any of the other tools we discuss. No affiliate links, no sponsored content. Our website stays online thanks to people who [donate](/donate).

## Summary

-   Directus is a very flexible platform that you can use as your CMS (content management system for your website) and [CRM](/tools/crm) (your people database).
    
-   Flexibility also comes with responsibility: you can build anything, but you need to know what to build, and how to build it. As with any CMS and CRM: for optimal use you need to invest in proper setup and training, which will help you get most out of your digital tools. This guide aims to help you with that.
    
-   In this guide, we explain how you can use Directus for:
    
    -   Managing your campaign website content
        
    -   Creating event signup forms and other custom forms
        
    -   Allowing local groups to manage their own website page, events and member contact list.
        
    -   Assigning tasks to organizers
        
    -   Making notes and keeping track of meetings with your members
        
-   You can relatively easily extend Directus with other dedicated tools: helpdesk software, phone banking, payment systems, etc.
    

## Introduction

### What do I need to get started?

You can use our template to get started easily, but you will be able to get much more out of Directus if you have/are someone who is tech savvy.

Ideally, you have have someone who is both tech savvy, but also knows a lot about campaigning and movement-building. If you cannot find that in one and the same person, get two people together.

Using a tool like Directus, it is possible to build a completely custom CMS (managing content for your campaign website) and CRM (people database). This means you will need quite a bit of campaigning experience to design something that works well. Luckily we did this for you!

You will still need to setup all tables, rows, permissions and other settings yourself. However, we are planning on developing a template for Directus to make this easier as well.

You will also need to build a website that fetches the data from your headless CMS. We plan on building a free website template that you can use.

> Want to receive updates from Activist Handbook?
> 
> 👉 [**Sign up!**](/join)

### **Who is this tech stack for?**

-   Movements that have the technical expertise to set up a complex digital infrastructure, or the money to pay someone else to do it
    
-   Movements that have the time required for the development (a few months, a month if you're quick and know people who've done it before) and maintenance this digital infrastructure.
    
-   Movements that want complete control over their data (for example, no US servers, or even on-premise).
    
-   Movements that want to be able to customize their CMS and CRM and extend it with dedicated software using best-in-class quality API and webhooks to avoid vendor lock-in _(for example, connect Directus with dedicated e-mail automation, helpdesk, meeting scheduling and phone banking software)_
    
-   Movements that want to work with open source software.
    
-   Movements that have grassroots organizing as an important part of their strategy (with personal in-real-life contact, building meaningful human relationships).
    
-   Movements that organize events regularly, and have local groups and individuals that also organize events.
    
-   Movements that have local groups and/or teams that each need to manage their members (for example, to welcome new volunteers, to keep track of different roles taken on).
    
-   Movements that want to scale up without worrying about costs going up exponentially, for example due to high admin users or contacts costs.
    

### **Who is this not for?**

-   Movements that want to have a ready-to-use tool.
    
-   Movements that only do email marketing, one-on-one email sales or phone banking and don't do much grassroots organizing.
    

> **Why not use a ready-made tool?**
> 
> You can! There are [many CRMs](/tools/crm) available. However, we have found that most are focussed on commercial organisations, not grassroots movements. Specifically, often event registrations and local group memberships are often missing.
> 
> In most cases you will be able to find workarounds! However, this means you will end up with a suboptimal system. For example, commercial terminology can be confusing for users, making your system less user-friendly.
> 
> Whether you choose to build your own system with a data app such as Directus, or go for a commercial application, either way you will have to invest in quite a bit of technical expertise to figure out a way to make optimal use of the technologies out there.
> 
> Ideally though, an activist developer reads this article and decides to build a dedicated tool inspired by this setup.

### What is a headless CMS?

A CMS is a content management system for your website. Usually, for example with Wordpress, a CMS contains 2 elements:

1.  Dashboard for editing content (only visible to admins)
    
2.  The website itself (visible to the public)
    

A headless CMS only offers the first one. For some people, an all-in-one package is nice. However, it offers much less flexibility. A regular CMS usually offers only one type of content: webpages, each with the same fields that you can edit (for example, a title and main body content).

In practice, websites often have many content types, that each require different fields. For example, an event needs a start and end time, and a location. A webshop needs products with prices. These different kinds of content types are difficult to build with a regular CMS. With a headless CMS, this is much easier to achieve, and it offers you the flexibility to change things as you go.

If you would like to learn more, read this article: [what is a headless CMS and why are they great?](https://www.contentful.com/headless-cms/)

### Why combine a CMS and CRM?

Combining a CMS and CRM **saves you lots of time** and makes your digital infrastructure more **user-friendly** for non-technical people. For example, with only 1 click, you can create an event, which will then appear on your website with a form. All RSVPs show up directly in your CMS/CRM, where you can see their entire contact history. There is no need to learn how to use 2 systems.

### Limitations

#### Email & text message automation

Many CRMs have tight integrations with e-mail automation and mass mailing tools. Some also allow you to send text messages using mobile phone numbers. This tight integration allows you to target contacts based on their contact details. It also allows you to link tracking information about email opens and clicks to your contacts, which can be useful to evaluate engagement (e.g. in the form of lead scoring). Finally, often you will be able to see which emails you have sent to an individual contact in their activity history, so you do not contact the same person twice with the same information.

It is possible to use a tool like Action Network for email marketing together with Directus. Contact details and activity such as event signups can be synchronised to Action Network, so you can use this information to send targeted emails. Depending on what webhooks and APIs your email marketing tool offers to synchronise data, this can work quite well.

However, using 2 systems that synchronise data comes with its limitations. While Directus offers best-in-class APIs, webhooks and automation tools, often this is not the case for the third party tools you are trying to connect to. For example, with Action Network, you will not be able to automatically export emails sent to contacts, or email open and click data to other applications. In addition, you will need the technical expertise to set up and maintain any synchronisation flows.

For many grassroots movements, these are acceptable compromises. While you might not be able to export all email data to Directus, but you will still be able to use that data within the email marketing tool itself. Email open and click data is arguably not that useful for one-on-one grassroots organizing purposes anyways, especially since this data has become much less reliable with new privacy protections offered by email providers. It depends on the system that you will use for email automation how well data will be synchronised. And it depends on your organisation what kind of data you need synchronised. Make sure to look into this before you start using Directus.

#### Shared inbox (helpdesk software)

Many CRMs have a built-in email inbox, that allows you to see all your communications with your contacts. Often, they also integrate with other communication channels, such as social media, live website chat and WhatsApp.

It is possible to use a tool like Chatwoot, and synchronise your conversations between your helpdesk software and Directus. That way, you can see your conversations within Directus. In addition, you can add a button in the contact profile to open a conversation in your helpdesk software. Finally, you can send your contact details to your helpdesk tool, so you do not have to open two apps to figure out who you are talking to. In other words: you will need to use 2 systems, but the data will be integrated to some extent.

However, this will not work as smoothly as a helpdesk tool that is directly integrated into your CRM. It also requires you to set up and maintain this synchronisation. If receiving and sending one-on-one emails is one of your core activities, you might not want to use this tech stack. It might also be the case that working in 2 systems with some slightly unintuitive elements balances out with the benefits of using Directus. You will need to make that decision.

## Using Directus

### Try out Directus locally

Directus does not offer a free trial. However, you can run Directus locally on your own computer as well to try it out. You will need to tinker around with copying and pasting some code. However, it is only 4 steps.

> If this sounds too scary for you, you can also [book a free demo](https://directus.io/demo?utm_source=activisthandbook.org) with Directus.

1.  **Download** [**Docker Desktop**](https://www.docker.com/products/docker-desktop/?utm_source=activisthandbook.org)**. You will need this to run Directus on your computer.**
    
2.  **Create a text file called "docker-compose.yml". Paste** [**this code**](https://docs.directus.io/self-hosted/quickstart.html?utm_source=activisthandbook.org#create-a-docker-compose-file)**. Save it in a folder called 'directus' on your desktop. This file contains the instructions for Docker so that it knows how to start up Directus.**
    
    -   _On a Mac, you can do this with the TextEdit app. You need to make it a plain text file (Format > Make Plain Text) and save it with the correct file extension (.yml not .txt)._
        
    -   _On Windows, you can use Notepad._
        
3.  **Open the Terminal app (Mac) or Command Line app (Windows). Run** [**this code**](https://docs.directus.io/self-hosted/quickstart.html?utm_source=activisthandbook.org#run-directus)**. This will tell Docker to read the code in the file you just created, and to start up Directus.**
    
4.  **You will then be able to visit Directus in your browser at** [**http://localhost:8055**](http://localhost:8055)**. Sign in with the login details that you saved in the "docker-compose.yml" file.**
    

These steps are explained in more detail on [**this page**](https://docs.directus.io/self-hosted/quickstart.html?utm_source=activisthandbook.org).

### Start using Directus

Once you are ready to start using Directus, you have two ways to do so:

1.  [**Host it yourself**](https://docs.directus.io/self-hosted/docker-guide.html?utm_source=activisthandbook.org) ($5 per month for a minimal setup, $20 for a faster server)
    
2.  [**Pay Directus to host it for you**](https://directus.io/pricing?utm_source=activisthandbook.org) ($99 per month, billed annually)
    

To host it yourself, you do need technical expertise and you will need to keep maintaining your webserver. In addition, you will need to get a licence if your organisations has more than $5 million in total finances.

You can host it anywhere. We have had a good experience using a [DigitalOcean droplet](https://www.digitalocean.com/pricing/droplets?utm_source=activisthandbook.org).

## Directus tables

Once you have access to Directus (either by trying it out locally, hosting it yourself or by paying Directus to host it for you), you can start setting it up!

In this section, we go through some recommended Directus database tables so you can start using it as your CMS and CRM. You can create these tables using the user interface, no need to code. We recommend you to read the [Directus user guides](https://docs.directus.io/user-guide/overview/data-studio-app.html?utm_source=activisthandbook.org).

The recommended tables below have been designed for a grassroots organisation. You can also check out [this video](https://directus.io/tv/100-apps-100-hours/crm?utm_source=activisthandbook.org) on how to build a more traditional CRM in Directus, or this list with [100 other ways to use Directus](https://directus.io/blog/100-tools-apps-and-platforms-you-can-build-with-directus?utm_source=activisthandbook.org).

### **Settings**

Using this table, you can manage organisation-wide settings.

**Table settings:**

-   Singleton: yes
    
-   Icon: cog
    

**Fields:**

-   Organisation name (text)
    
-   Theming options (fonts, colors)
    
-   Default event form (relation: forms)
    

**Permissions:**

-   Can only be viewed and edited by admins
    

**Layout bookmark:** Calendar or map

### **Events**

**Fields:**

-   Status (draft, published, archived)
    
-   Title (text)
    
-   Start (date & time)
    
-   End (date & time)
    
-   Location
    
-   Description (long text)
    
-   Content blocks (many to any builder)
    
-   Custom form (relation: forms)
    
-   Tags (relation: tags)
    

### **Forms**

**Fields**

-   Title (text)
    
-   Fields (relation: form fields)
    
-   Submissions (relation: submissions)
    
-   Tags (relation: tags)
    

### **Groups**

**Fields**

-   Status (draft, published, archived)
    
-   Name
    
-   Description
    
-   Location
    
-   Content blocks (many to any builder)
    
-   People (relation: people)
    
-   Tags (relation: tags)
    

### **Meetings**

**Fields**

-   Person (relation: people)
    
-   By (relation: user)
    
-   Notes (WYSIWYG)
    
-   Start (date & time)
    
-   End (date & time)
    
-   Tags (relation: tags)
    

### **Pages**

**Fields**

-   Status (draft, published, archived)
    
-   Title (text)
    
-   Description (long text)
    
-   Content blocks (many to any builder)
    
-   Tags (relation: tags)
    

### **People**

**Fields**

-   First name
    
-   Email addresses
    
-   Phone numbers
    
-   Tags (relation: tags)
    

### **Tags**

Can be used to organize anything. For example, you might want to group a series of events, webpages and tasks that belong to the same campaign, which makes it easier to analyse the impact of your campaign.

**Fields**

-   Status (to-do, done, archived)
    
-   Name (short text)
    
-   Responsible (relation: directus\_users)
    
-   Person (relation: people)
    

### **Tasks**

-   Notes (WYSIWYG)
    
-   Tags (relation: tags)
    

### **Email addresses (hidden table)**

### **Phone numbers (hidden table)**

### **Form fields (hidden table)**

### **Signups (hidden table)**

**Columns**

## Campaign website

A statically generated campaign website, built using Nuxt. It renders its pages based on the content fetched from Directus. Form submissions are sent to Directus.

Sitemap:

-   Home: general signup form
    
-   Events
    
-   Local groups
    
-   Guides
    

## Integrations

### Mass mailing & automation

Since Directus as a CRM does not offer any way of sending mass emails, you will need to connect it to a marketing automation system. In this section, we will explain how you can synchronise Directus data with Action Network. Even if you decide to go with another marketing system, these recommendations will still help you get started.

In this scenario, we assume a one-way synchronisation from Directus to Action Network.

You will need to set up the following automation workflows:

-   **Create person in Directus** → [Create person](https://actionnetwork.org/docs/v2/person_signup_helper?utm_source=activisthandbook.org) in Action Network → save Action Network person ID to Directus contact
    
-   **Modify person in Directus** → [Modify person](https://actionnetwork.org/docs/v2/person_signup_helper?utm_source=activisthandbook.org) in Action Network (using person ID)
    
-   **Delete person in Directus** → Not possible using the API, send admin a notification to do it manually. It is possible to [unsubscribe](https://actionnetwork.org/docs/v2/delete/?utm_source=activisthandbook.org) someone in Action Network
    
-   **Create event in Directus** → [Create event](https://actionnetwork.org/docs/v2/events?utm_source=activisthandbook.org) in Action Network
    
-   **Modify event in Directus** → [Modify event](https://actionnetwork.org/docs/v2/events?utm_source=activisthandbook.org) in Action Network
    
-   **Delete event in Directus** → [Modify event](https://actionnetwork.org/docs/v2/events?utm_source=activisthandbook.org) name, add '\[Deleted\]' in Action Network (deleting events not possible via API)
    
-   **Create event signup in Directus** → [Create event attendee](https://actionnetwork.org/docs/v2/record_attendance_helper?utm_source=activisthandbook.org) in Action Network
    
-   **Modify event signup in Directus** → Not possible in Action Network
    
-   **Delete event signup in Directus** → Not possible in Action Network
    
-   **Create group in Directus** → [Create form](https://actionnetwork.org/docs/v2/forms?utm_source=activisthandbook.org) in Action Network (creating groups not possible via API)
    
-   **Create group member in Directus** → [Create form submission](https://actionnetwork.org/docs/v2/record_submission_helper?utm_source=activisthandbook.org) in Action Network
    
-   **Create tag in Directus** → [Create tag](https://actionnetwork.org/docs/v2/tags?utm_source=activisthandbook.org) in Action Network
    
-   **Tag added to person in Directus** → [Create tagging](https://actionnetwork.org/docs/v2/taggings?utm_source=activisthandbook.org) in Action Network
    

### Collaborative inbox

Chatwoot

### Analytics