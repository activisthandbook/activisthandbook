---
title: >
  Workflow automation tools for activists
description: >
  Connect apps and automate things
langCode: en
articleID: ZiF6omrPDykHceZ75KS70PfGnJg67D0Y
languageCollectionID: lcpxY7YdfmZQBHkL1bVIAEk9i3pQWg61
updatedTimestamp: 1724508014827
createdTimestamp: 1624720274805
wordCount: 1141
tags: ["tools","stub"]
---

**As an activist, you may find you are spending quite a lot of time on repetitive tasks. Automation tools like Zapier and n8n help activists achieve more in less time. It can also help to connect all of your digital tools together.**

> **Article quality**: ⭐️⭐️⭐️ (3/5)

## **How to use workflow automation tools?**

Workflow automation tools can be used to connect different apps. For example, you can send yourself a Slack message every time someone submits a Google Form.

These tools often provide **build-in app integrations**. These are apps that you can just select from the user interface to connect.

However, if you have some technical skills, you can use **webhooks** and **APIs** to integrate any app, even if they do not offer a native integration. We highly recommend digital organizers to learn to use webhooks and APIs, as they are a relatively easy way of powering up the digital infrastructure of your movement!

### What are webhooks?

A webhook is an automatic message that is sent to a specific place (a URL) whenever something happens. For example, when someone fills out a form, their submission data is sent to another app.

You can use webhooks to get data from one app to another instantly. Webhooks can be triggered when new data is created, when something is updated or when something is deleted.

A webhook is always initiated by the app where some event happened.

### What are APIs?

An API is a way of communicating with an app. You can use an API to **get, update or delete data** on that app. For example, you can visit the URL "_myexampledatabase.com/api/person/sophie_" and that app will respond with information about that person.

The response is often formatted in [JSON](https://www.w3schools.com/js/js_json_intro.asp?utm_source=activisthandbook.org). This is a standardised way of writing down certain values (such as name, address, email, phone number), so your workflow automation tool can understand it. Think of it as the address you write on a letter: this has to be formatted in a certain way for the postal office to understand where you want your letter to go.

In many cases, you will need an **API key** to access the API. For example, if you are accessing data from your database with volunteers, you do not want just anyone to be able to access it.

If you are using a tool like n8n, you would use the "[HTTP request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/?utm_source=activisthandbook.org)" node to send an API request. Using Zapier, you would us the "[API Request](https://help.zapier.com/hc/en-us/articles/14096700504717-Make-raw-HTTP-requests-with-API-Request-actions-Beta-?utm_source=activisthandbook.org)" action.

This is what an API request could look like:

>     POST https://actionnetwork.org/api/v2/people/
>     
>     Header:
>     Content-Type: application/json
>     OSDI-API-Token: your_api_key_here
>     						
>     
>     {
>       "person" : {
>         "family_name" : "Smith",
>         "given_name" : "John",
>         "postal_addresses" : [ { "postal_code" : "20009" }],
>         "email_addresses" : [ { "address" : "jsmith@mail.com" }],
>         "phone_numbers": [ {"number": "2021234444" }]
>        },
>       "add_tags": [
>         "volunteer",
>         "member"
>       ],
>       "remove_tags": [
>         "inactive"
>       ]
>     }

## Common scenarios

### Synchronising data with webhook

In this scenario, we want to synchronise data between two apps. The app from which you want to send data offers a webhook. For example, you have a meeting scheduling tool, and every time someone schedules a meeting, you want to save this in your volunteer database.

To achieve this, we can use a tool like n8n, or any of the other tools offered below. In App A (the meeting scheduling tool), we set up a webhook that triggers when someone schedules a meeting. We change the setting so the data is sent to a [specific URL](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/?utm_source=activisthandbook.org) that we have created in n8n.

n8n now automatically receives the data (in JSON format) every time someone schedules a meeting. This data might need [some editing](https://docs.n8n.io/data/transforming-data/?utm_source=activisthandbook.org), before it can be sent to App B (the volunteer database). And finally we send the transformed data to App B using an API request. We do this using the "[HTTP request](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/?utm_source=activisthandbook.org)" node.

In this node, we specify the HTTP headers. This is where we include the API key, and specify the content type (we need to let App B know we are sending JSON data). The body will be the data formatted as JSON.

<dynamic-image imageid="59b03919-f76a-463c-9484-1a585e770100" alt="Step 1: A webhook is triggered, data is sent from App A to n8n. Step 2: n8n sends the data to App B."><p>Instant data synchronisation using a webhook and API, by <a target="_blank" href="https://edit.activisthandbook.org/author/tzmE91SnnrbJJXuvQNBl9rt6HK63">Joppe</a></p></dynamic-image>

### Synchronising without webhook

If App A does not offer a webhook but does offer an API, the workflow looks slightly different. Now, we schedule de automation tool, for example n8n, to get the latest data every hour from App A. Then we send that data to App B.

<dynamic-image imageid="4dbea05d-78c3-43ca-20cb-af17f365f800" alt="Step 1: Get data using API request from App A. Step 2: App A then responds with the data. Step 3: Send the data to App B"><p>Data synchronisation workflow without webhook, by <a target="_blank" href="https://edit.activisthandbook.org/author/tzmE91SnnrbJJXuvQNBl9rt6HK63">Joppe</a></p></dynamic-image>

## **Tools**

### **n8n (open source)**

[n8n](https://n8n.io/?utm_source=activisthandbook.org) is an open source workflow automation tool. You can host it yourself or pay so they host it for you. It has an easy to use graphical user interface, just like Zapier.

Hosting it yourself has the benefit that you do not need to share any of your data with other companies. Even if you choose to pay n8n so they host it for you, they still offer better privacy protection than Zapier as their servers are located in EU instead of the US.

n8n offers fewer built-in [app integrations](https://n8n.io/integrations/?utm_source=activisthandbook.org) that you can connect in comparison to Zapier. However, if you know how to use Webhooks and APIs, you can connect any app that Zapier offers.

### Zapier (most popular)

Out of all these tools, [Zapier](https://zapier.com/?utm_source=activisthandbook.org) is the easiest to use because it has most built-in [app integrations](https://zapier.com/apps?utm_source=activisthandbook.org). However, it is on the expensive side. A major downside is that its servers are located in the US, which makes it less suitable for handling privacy sensitive data.

### Make

[Make](https://make.com/?utm_source=activisthandbook.org) is a commercial alternative to Zapier. It is cheaper, but has a slightly less intuitive user interface. A privacy benefit is that its servers are located in the EU instead of the US.

### NodeRed

[NodeRed](https://nodered.org/?utm_source=activisthandbook.org) is a programmer oriented tool, that also offers a (limited) graphical user interface.

### Cloud functions

If you are a programmer, you can also use cloud functions for workflow automation. This is often cheaper than using dedicated tools. They usually offer a free tier that offers a certain amount of free cloud function runs. This comes at the cost of easy-of-use of course.

You will need some Javascript experience to use the following tools:

-   [Firebase functions](https://firebase.google.com/docs/functions?utm_source=activisthandbook.org)
    
-   [Cloudflare functions](https://developers.cloudflare.com/pages/platform/functions/?utm_source=activisthandbook.org)
    

For example, you can use Zapier to automatically add new sign-ups to your mailing list, or to tweet every time you edit a Google Sheets.

N8n is a tool that lets you create workflows between different apps. It’s perfect for automating complex tasks, like sending out meeting reminders or tracking your progress on a campaign.

Both Zapier and n8n make it easy to connect all of the different tools you use as an activist. This can save you a lot of time and hassle - and help you achieve more in less time.

## Improve this page

Have you used automation tools before? Share your experience and compare the different tools that are available.

## External resources

-   [**10 Best Zapier Alternatives In 2021: Review And Comparison**](https://www.softwaretestinghelp.com/zapier-alternatives/)