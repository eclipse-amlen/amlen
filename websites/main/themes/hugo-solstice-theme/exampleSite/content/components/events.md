---
title: "Events"
date: 2019-04-17T15:52:04-04:00
description: ""
categories: []
keywords: []
slug: ""
aliases: []
toc: false
draft: false
---

You can add events to a markdown file using the following shortcodes: **{{&lt; events &gt;}}** or **{{&lt; events_table &gt;}}**

To add events, create a **events.yml** file in the data folder and add the code bellow:

~~~~
title: Events
tagline: Come meet the Eclipse Community at these upcoming events!

#buttons
more_button_text: View More Events <i class="fa fa-arrow-down"></i>
submit_button_text: Submit Event
submit_button_link: https://gitlab.eclipse.org/eclipsefdn/it/webdev/hugo-solstice-theme/-/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=

items:
  -
    name: Example Event 1
    location: Location, Location
    date: Month xx, xxxx
    expire_date: 2030-03-28T23:59:00-00:00
    button_url: https://gitlab.eclipse.org/eclipsefdn/it/webdev/hugo-solstice-theme/-/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=
    button_text: Button text
  -
    name: Example Event 2
    location: Location, Location
    date: Month xx, xxxx
    expire_date: 2030-03-28T23:59:00-00:00
    button_url: https://gitlab.eclipse.org/eclipsefdn/it/webdev/hugo-solstice-theme/-/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=
    button_text: Button text
~~~~

**Examples:**

Here is an example of the events in a block view:

{{< events >}}

Here is an example of the events in a table view:

{{< events_table >}}
