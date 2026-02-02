---
title: "Testimonials"
date: 2019-04-17T15:52:22-04:00
description: ""
categories: []
keywords: []
slug: ""
aliases: []
toc: false
draft: false
---

You can add testimonials to a markdown file using the shortcode **{{&lt; testimonials &gt;}}**

To add testimonials, create a **testimonials.yml** file in the data folder and add the code below:

~~~~
items:
  -
    text: Text of the testimonial 1
    title: Name of the person
  -
    text: Text of the testimonial 2
    title: Name of the person
~~~~

## Base data source

{{< testimonials >}}

## With localized copies EN + FR, w/ fallback in `./data`

{{< testimonials source="localized_testimonials">}}

## With localized copies EN + FR, w/o fallback in `./data`

{{< testimonials source="localized_testimonials_no_fallback" >}}
