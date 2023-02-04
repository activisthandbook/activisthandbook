---
title: >
  Developer docs: How we built this platform
langCode: en
articleID: mFvr8NY7392dMXoQ8AWrfDIO_krJQ3sc
languageCollectionID: stl7YHj6a3Hs5oCpwIUBt9OEns2WGuau
lastUpdated: 1615061523633
tags: []
---

## Tools we use

### Wiki

The Activist Handbook platform is running [WikiJS](https://wiki.js.org). During our two-day hadckaton, we initially chose to use Mediawiki, but due to the high level of customisation needed to make it more modern looking, after the hackaton we chose to switch to WikiJS. We were looking for a platform with the following features:

-   **Open source and free to use:** We realise it might be a bit too much demanding to want to have a fully working wiki platform for free. Right now, however, we simply do not have any budget. In the future we will try to grow our developers team and actively contribute to the codebase of WikiJS. If we are able to secure a budget, we will certainly considering contributing financially as well. As a final note, we believe that by supporting open source projects, many other people will be able to benefit from it.
-   **Modern platform:** We want to use a platform with a modern UI that is future proof. Although we want to stress our thanks to the Mediawiki community for setting the standard when it comes to wikis, we felt the software base just looks like it is stuck in the past, with no clear indication of future improvement.
-   **Long term support:** Switching platforms is always tedious work, so preferably we stick with one.
-   **Owning our own data:** We want to be able to access and export our data to other platforms, just in case we decide to switch platforms.
-   **Little customisation needed initially:** While it might be technically possible to develop our own skin for Mediawiki, we do not have the resources to do so. We needed a platform that was ready to use straight away, with the possibility to alter the UI and add functionality later on in our roadmap.
-   **Page versioning and moderation:** Since anyone can register on our site and start editing, we need a way to revert changes made to counter vandalisation.
-   **Localisation and multilingual content:** We want everyone to be able to access and contribute our website, no matter the language they speak. This includes right-to-left text support.
-   **Simple to use with visual editor:** We want anyone to be able to contribute, without having to learn how to use our platform.
-   **Unlimited contributors, content available for everyone:** A lot of commercial tools for internal wikis exist nowadays. Usually one has to pay per contributing user, which makes them unusable for us.

While WikiJS still has some unfinished parts and only has one main developer, we believe the project shows the potential to become exactly what we need. We are looking to extend our own developers team so that we can start contributing to the open source WikiJS project directly.

### Hosting

We bought our domain name at [GoDaddy](https://www.godaddy.com). Our website is hosted using a droplet by [DigitalOcean](https://m.do.co/c/853123d09510) _(affiliate link: you get €100, we get €25)_ for $6 per month with the [one-click installation](https://docs.requarks.io/install/digitalocean) of WikiJS. We use the free version of [Cloudflare](https://www.cloudflare.com) to protect our site.

### Backups

A backup is made of our full server every week by DigitalOcean, as documented [here](https://www.digitalocean.com/docs/images/backups/). This costs us an additional 20% above our €6 droplet (monthly).

We also keep a mirror of all articles on GitHub. Check out this [guide](https://docs.requarks.io/storage/git) how to set up Git versioning in WikiJS.

### Analytics

We're currently using Google Analytics to track the popularity of pages. We realise the privacy implications of using Google Analytics, so we are planning to start using a self-hosted [Matomo](https://matomo.org) instance soon in the future.

### Email

We wanted an email setup that would cost as little as possible while still remaining reliable. Verification emails when signing up are send using [Amazon SES](https://aws.amazon.com/ses/), for which we have a free limit of 62,000 emails per month with a rate of 14 emails/second.

We receive emails using Google Suite. There is also a plan for non-profits, but since we are not yet an officially registered foundation, we cannot apply for it.