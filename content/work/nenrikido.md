---
title: Nenrikido
weight: 5
tags: ["featured",  "webdesign", "webdevelopment"]
summary: A multi-purpose website I designed and developed with an emphasis on art. It features a desktop-style layout with draggable windows and multiple themes.
featured_image: /images/work/thumb/nenrikido_thumb.webp
draft: false
---

## Overview
Nenrikido is a web project I made to host my digital illustrations and free-to-use code. It is also home to a digital library, a richly featured Hugo-powered blog, and an RSS-integrated microblog. The site is modelled after a desktop layout and features a start menu footer modal, draggable windows, a search bar, and multiple themes.

## Style Guide

## Tech Stack

{{< stack >}}
{{< icons/hugo >}} {{< icons/html >}} {{< icons/sass >}} {{< icons/js >}} {{< icons/github >}} {{< icons/neocities >}}
{{< /stack >}} 

Nenrikido uses a static site generation stack to meet host site requirements and keep the site lightweight. My generator is **Hugo**, which allows for swift build times. I created a styling library with **SASS**, using theme maps and mix-ins to produce a visually interesting website. I also used **JavaScript** for functionality like modals, a footer clock, and theme switching. Additionally, I used JS libraries like **Muuri** and **Lunr** for layout control, draggable windows, tag filtering, and index/searching. The site is hosted on **Github** and I use a GitHub Action to automatically deploy my site to **Neocities**,  leveraging content-aware diffing for precise updates, optimizing efficiency by solely modifying altered files on each push.

## Notable Features
Nenrikido is an ambitious web project that has a few notable features, including a webring, a digital library, a gallery, an RSS-powered microblog, and free-to-use code.

{{< lightbox lightbox-id="jr" img-src="/images/work/nenrikido/journalring.gif" img-class="right-img" alt="A gif flipping through a digital journal." >}}

### JournalRing
I created a [webring](https://nenrikido.neocities.org/webrings/journalring/) called JournalRing with custom Javascript and pixel art as a nod to Nenrikido's "old web" sensibilities. [Webrings](https://en.wikipedia.org/wiki/Webring) were a staple of the internet in the 1990s and 2000s and are popular on Neocities. I thought it'd be interesting to create a webring centered around journaling that utilizes modern JS practices like web components to control widget display. I created a layout modeled after a Hobonichi Techo A6 planner with tabs and dynamically generated page numbers. Users can sign up via a form on the "Join" tab and upon being accepted, they will be automatically added to the "Members" tab, which emulates an address book. Users can insert code on their sites to show a pixel art widget of their choice that navigates between members on the list.

### RSS-powered microblog


## Gallery