---
title: "Users display"
date: 2019-04-17T15:52:27-04:00
description: ""
categories: []
keywords: []
slug: ""
aliases: []
toc: false
draft: false
container: container-fluid
hide_sidebar: true
---

!!TODO

## With carousel

{{< events/user_display event="sample" >}}
Sed quis tellus ligula. Mauris aliquam risus lectus, vitae pretium ex imperdiet vestibulum. Praesent eget cursus neque. Integer vehicula ipsum lectus, eget consequat nisi placerat ac. Etiam id lacus laoreet lacus rhoncus facilisis. Nullam varius mattis lorem, quis pulvinar turpis condimentum a. Pellentesque erat massa, vehicula iaculis imperdiet non, facilisis in enim. Maecenas tincidunt posuere lectus sit amet ullamcorper.

Duis leo erat, pharetra eget gravida nec, condimentum non justo. Proin eu nisl ac magna cursus gravida. Sed varius justo egestas, bibendum urna et, tempor elit. Donec sagittis, libero quis commodo consequat, sem eros vulputate velit, in porta est erat elementum dolor. Aliquam tempor, dolor et consectetur bibendum, neque nunc fermentum sapien, eu pharetra ante eros vel leo. Nunc sit amet urna ac lorem molestie fermentum. 
{{< /events/user_display >}}

## No carousel

{{< events/user_display event="sample" useCarousel="false" >}}
Sed quis tellus ligula. Mauris aliquam risus lectus, vitae pretium ex imperdiet vestibulum. Praesent eget cursus neque. Integer vehicula ipsum lectus, eget consequat nisi placerat ac. Etiam id lacus laoreet lacus rhoncus facilisis. Nullam varius mattis lorem, quis pulvinar turpis condimentum a. Pellentesque erat massa, vehicula iaculis imperdiet non, facilisis in enim. Maecenas tincidunt posuere lectus sit amet ullamcorper.
{{< /events/user_display >}}

## No inner content
{{< events/user_display event="sample" useCarousel="false" />}}

## Year
{{< events/user_display event="sample" useCarousel="false" year="2020" />}}

## Header class
{{< events/user_display event="sample" headerClass="h3" useCarousel="false" />}}

## Title
{{< events/user_display event="sample" useCarousel="false" title="Some new title" />}}

## Different source
{{< events/user_display event="sample" useCarousel="false" source="speakers" />}}

## Subpage w/ defined event

Expect url like `/sample/user-bios`.  

{{< events/user_display event="sample" useCarousel="false" subpage="user_bios" >}}
Sed quis tellus ligula. Mauris aliquam risus lectus, vitae pretium ex imperdiet vestibulum. Praesent eget cursus neque. Integer vehicula ipsum lectus, eget consequat nisi placerat ac. Etiam id lacus laoreet lacus rhoncus facilisis. Nullam varius mattis lorem, quis pulvinar turpis condimentum a. Pellentesque erat massa, vehicula iaculis imperdiet non, facilisis in enim. Maecenas tincidunt posuere lectus sit amet ullamcorper.
{{< /events/user_display >}}

## Subpage w/ default event

Expect url like `/single_page/user_bios`.  

{{< events/user_display useCarousel="false" subpage="single_page/user_bios" >}}
Sed quis tellus ligula. Mauris aliquam risus lectus, vitae pretium ex imperdiet vestibulum. Praesent eget cursus neque. Integer vehicula ipsum lectus, eget consequat nisi placerat ac. Etiam id lacus laoreet lacus rhoncus facilisis. Nullam varius mattis lorem, quis pulvinar turpis condimentum a. Pellentesque erat massa, vehicula iaculis imperdiet non, facilisis in enim. Maecenas tincidunt posuere lectus sit amet ullamcorper.
{{< /events/user_display >}}

## Subpage w/ defined event+year

Expect url like `/2020/sample/user-bios`.  

{{< events/user_display event="sample" useCarousel="false" subpage="user_bios" year="2020" >}}
Sed quis tellus ligula. Mauris aliquam risus lectus, vitae pretium ex imperdiet vestibulum. Praesent eget cursus neque. Integer vehicula ipsum lectus, eget consequat nisi placerat ac. Etiam id lacus laoreet lacus rhoncus facilisis. Nullam varius mattis lorem, quis pulvinar turpis condimentum a. Pellentesque erat massa, vehicula iaculis imperdiet non, facilisis in enim. Maecenas tincidunt posuere lectus sit amet ullamcorper.
{{< /events/user_display >}}

## Subpage w/ default event

Expect url like `/2020/single_page/user_bios`.  

{{< events/user_display useCarousel="false" subpage="single_page/user_bios" year="2020" >}}
Sed quis tellus ligula. Mauris aliquam risus lectus, vitae pretium ex imperdiet vestibulum. Praesent eget cursus neque. Integer vehicula ipsum lectus, eget consequat nisi placerat ac. Etiam id lacus laoreet lacus rhoncus facilisis. Nullam varius mattis lorem, quis pulvinar turpis condimentum a. Pellentesque erat massa, vehicula iaculis imperdiet non, facilisis in enim. Maecenas tincidunt posuere lectus sit amet ullamcorper.
{{< /events/user_display >}}