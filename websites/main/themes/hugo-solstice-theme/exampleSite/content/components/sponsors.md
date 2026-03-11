---
title: "Sponsors"
date: 2019-04-17T15:51:20-04:00
description: ""
categories: []
keywords: []
slug: ""
aliases: []
toc: false
draft: false
hide_sidebar: true
container: "container-fluid"
---

Sponsors can be added to the site through an `sponsors.yaml` data file added in a subfolder of the data folder for the target locale (for localization, for default, create/use the "en" folder). An example of this path is as follows, `data/en/default/sponsors.yaml`. The data should be similar to the following format: 

```
items:
  - title: Jakarta EE
    url: https://jakarta.ee/
    image: https://www.eclipse.org/org/artwork/images/jakartaee_c.png
    width: 200px
  - title: IoT
    url: https://iot.eclipse.org/
    image: https://www.eclipse.org/org/artwork/images/new_iot_logo_clr.svg
    width: 100px
  - title: Eclipse Foundation
    url: https://www.eclipse.org
    image: https://www.eclipse.org/org/artwork/images/eclipse_foundation_logo.jpg
    width: 200px
```
Items in these data files represent the actual sponsor logo to be represented in the sponsor section.

** Note: container-fluid used to show full width components with banner background simulation

## Default
Expect url like `/default/sponsors`.
{{< events/sponsors >}}

---
## Event
Expect url like `/sample/sponsors`.
{{< events/sponsors event="sample" >}}

---
## Year
Expect url like `/2020/default/sponsors`.
{{< events/sponsors year="2020" >}}

---
## Event + year
Expect url like `/2020/sample/sponsors`.
{{< events/sponsors year="2020" event="sample" >}}

---
## Carousel
{{< events/sponsors useCarousel="true" source="sponsors_carousel">}}

---
## Carousel w/ altered counts
{{< events/sponsors 
  useCarousel="true"
  source="sponsors_carousel"
  xsSliderCount="3"
  smSliderCount="4"
  mdSliderCount="5"
  lgSliderCount="8"
 >}}

---
## Title
{{< events/sponsors title="Sample title">}}

---
## Header class
{{< events/sponsors headerClass="text-center heading-underline">}}

---
## Item class
{{< events/sponsors itemClass="padding-50">}}
