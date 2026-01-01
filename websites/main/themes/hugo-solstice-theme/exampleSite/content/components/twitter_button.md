---
title: "Twitter Buttons"
date: 2019-04-17T15:52:27-04:00
description: ""
categories: []
keywords: []
slug: ""
aliases: []
toc: false
draft: false
---

A shortcode wrapper for the [Twitter button embeds](https://developer.twitter.com/en/docs/twitter-for-websites).

---

## Follow Button
A button to follow a Twitter profile. To display this type of button, set the `type` parameter to `"follow"`.

{{< twitter_button type="follow" >}}

### Set Handle*
The Twitter handle can be set from the site's config.toml file or by using the `handle` parameter.

{{< twitter_button type="follow" handle="EclipseCon" >}}

### Size Property*
The `size` parameter can be set to "default" or "large".

{{< twitter_button type="follow" size="large" >}}

### Show Follower Count
The follower count can be toggled using the `hide_followers` parameter.

{{< twitter_button type="follow" hide_followers="false" >}}

{{< grid/div class="sideitem margin-top-20" >}}
**\* Note:** These parameters also apply to the Mention Button and Hashtag Button types.  
{{</ grid/div >}}

---

## Mention Button
A button to tweet to a profile. The profile is set using the `handle` parameter. This can be omitted if the Twitter handle is specified in config.toml. 

{{< twitter_button type="mention" >}}

---

## Hashtag Button
A button to tweet with a hashtag. The hashtag can be set using the `hashtag` parameter.

{{< twitter_button type="hashtag" hashtag="eclipsecon" >}}

