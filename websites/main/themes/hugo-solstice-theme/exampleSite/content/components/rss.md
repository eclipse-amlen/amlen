---
title: Solstice RSS Blog List
date: 2019-04-17T19:52:27.000Z
description: ''
categories: []
keywords: []
slug: ''
aliases: []
toc: false
draft: false
lastmod: '2021-12-08T16:44:54.441Z'
---

## Default

{{< solstice_rss_blog_list urls="components/index.xml,https://planeteclipse.org/planet/ecdtools.xml,https://jakartablogs.ee/rss20.xml,https://planeteclipse.org/planet/rss20.xml" limit="2" >}}

## When using a custom mustache template

{{< solstice_rss_blog_list urls="components/index.xml,https://planeteclipse.org/planet/ecdtools.xml,https://jakartablogs.ee/rss20.xml,https://planeteclipse.org/planet/rss20.xml" limit="2" template-id="mustache-tpl-custom-news-list-item">}}


{{< mustache_js template-id="mustache-tpl-custom-news-list-item" path="/js/templates/tpl-custom-news-list-item.mustache">}}
