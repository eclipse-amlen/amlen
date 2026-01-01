---
title: "Featured Footer"
date: 2019-06-02T15:50:36-04:00
description: ""
categories: []
keywords: []
slug: ""
aliases: []
toc: false
draft: false
show_featured_footer: true
---

By default, the featured footer is present on all pages in the site. To disable this feature, set the parameter `show_featured_footer: false` at the page level.  

To add featured stories, a new entry can be submitted via the [Newsroom site](https://newsroom.eclipse.org/) using the [Add Featured Story](https://newsroom.eclipse.org/node/add/featured-story) page if you have access. To update what content is retrieved from the featured content API, a parameter of `featured_content_publish_target` can be set in the page or site parameters. This parameter would apply to both the featured footer and featured story content and would be the publish target for the given site (e.g. `eclipse_org`, `eclipse_iot`, `jakarta_ee`).

If there are multiple valid stories at a single time to display, the component will randomly select one and display it on the page.

**Examples:**

Included below the content of this page is a sample of the featured footer component.
