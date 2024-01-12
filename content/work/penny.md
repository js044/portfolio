---
title: "Penny Molesso's Portfolio"
weight: 3
tags: ["featured", "webdesign", "webdevelopment"]
featured_image: /images/work/thumb/penny_thumb.webp
summary: Penny Molesso's portfolio website. I co-designed and developed it to showcase their body of work. I also implemented a password-protected thesis show.
draft: false
---

## Overview
Penny Molesso is a transmedia artist who needed a portfolio website and a place to display their thesis show. I helped them design the site and then coded and deployed it. The website [is live](https://pennymolesso.com/).

## Tech Stack
The tech stack for Penny's website is intentionally very simple to allow for high flexibility and lightweightness. Using vanilla HTML, CSS, and JS, I helped Penny set up a **Github** repository and had them add me as a collaborator so I could push the files and provide ongoing maintenance. I deployed the site with **Github Pages** to simplify the workflow.

{{< stack >}}
{{< icons/html >}} {{< icons/css >}} {{< icons/js >}} {{< icons/github >}}
{{< /stack >}} 

## Notable Features

{{< lightbox lightbox-id="penny" img-src="/images/work/penny/Password.png" img-class="right-img" alt="A screencap of a password protected page." >}}

### Password protection
Penny wanted to create a public-facing version of their thesis show and keep a more intimate, in-depth version limited to the in-person show and a private online one. The public version can be located [here](https://pennymolesso.com/sbwf), and the full thesis page can be accessed [here](https://pennymolesso.com/thesis) (as long as you have the password). Finding a way to implement encryption on a static website with no backend was a challenge, but using [Staticrypt](https://github.com/robinmoisson/staticrypt), I implemented a password-protected version of Penny's thesis show. I changed the CSS of the password protected page to match the visual style of the rest of Penny's "Spit Brimming with Futures" thesis project.

{{< lightbox lightbox-id="penny" img-src="/images/work/penny/thesisicons.gif" img-class="left-img" alt="Three glowing icons." >}} 

### Glowing thesis icons
Each icon on Penny's thesis page represented a different spoken word poem. This feature is disabled on the public-facing page, but on the full thesis page, clicking on each one will trigger an audio clip of Penny reading these poems. I implemented this functionality with a combination of JS and CSS. On click, an audio file would play. And on hover, a drop shadow filter would be deployed. The thesis images all had custom glow colors to complement the icons. 

### Different themes
Each of Penny's page sections have different styling. This is intentional to make it feel as if one is traversing through different "dimensions"/worlds. The only section that contains multiple pages is the "Spit Brimming with Futures" page, which has a similar layout as the password-protected thesis page. Aside from this, fonts, color schemes, background styling, and page layouts are changed from page to page. One unifying visual element to tie in all these layouts is incorporating glow effects.

## Gallery
{{< gallery gallery_dir="work/penny/gallery" >}}