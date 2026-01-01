---
title: "Sidebar"
date: 2024-09-05
sidebar: 
    - sidebar-custom 
    - sidebar-additional
---

## Front matter

A custom sidebar menu can be added to a specific page or subsection by including the "sidebar" parameter to a page's front matter using the following format:

~~~md
sidebar: 
  - <custom-identifier>
  - <custom-identifier-2>
  - <custom-identifier-3>
~~~

## Site configs

For each sidebar identifier added in front matter, a corresponding config must be added to the site's "config" file. The "url" key can be omitted from the top-level menu items if they need to be displayed as regular text.

Using the identifiers listed above, here is what this configuration would look like:

~~~toml
## First menu section
[[sidebar]]
  identifier = "custom-identifier"
  name = "Custom Title 1"
  url = "Absolute or relative URL"
  weight = 1

[[sidebar]]
  parent = "custom-identifier"
  name = "Menu Item 1"
  weight = 1
  url = "Absolute or relative URL"

[[sidebar]]
  parent = "custom-identifier"
  name = "Menu Item 2"
  weight = 2
  url = "Absolute or relative URL"

[[sidebar]]
  parent = "custom-identifier"
  name = "Menu Item 3"
  weight = 3
  url = "Absolute or relative URL"

## Second menu section
## This menu title will not display as a clickable link
[[sidebar]]
  identifier = "custom-identifier-2"
  name = "Custom Title 2"
  weight = 1

[[sidebar]]
  parent = "custom-identifier-2"
  name = "Menu Item 1"
  weight = 1
  url = "Absolute or relative URL"

## Third menu section
[[sidebar]]
  identifier = "custom-identifier-3"
  name = "Custom Title 3"
  url = "Absolute or relative URL"
  weight = 1

[[sidebar]]
  parent = "custom-identifier-3"
  name = "Menu Item 1"
  weight = 1
  url = "Absolute or relative URL"
~~~

## On this page

Below is the configuration used to display the sidebar on this page.

~~~md
sidebar: 
  - sidebar-custom 
  - sidebar-additional
~~~

~~~toml
[[sidebar]]
  identifier = "sidebar-custom"
  name = "Eclipse Working Groups"
  url = "https://www.eclipse.org/collaborations/"
  weight = 1

[[sidebar]]
  parent = "sidebar-custom"
  name = "Explore Working Groups"
  weight = 1
  url = "https://www.eclipse.org/org/working-groups/explore/"

[[sidebar]]
  parent = "sidebar-custom"
  name = "About Working Groups"
  weight = 2
  url = "https://www.eclipse.org/org/working-groups/about/"

[[sidebar]]
  identifier = "sidebar-additional"
  name = "Related Links"
  weight = 2

[[sidebar]]
  parent = "sidebar-additional"
  name = "Working Group Process"
  weight = 1
  url = "https://www.eclipse.org/org/working-groups/process/"

[[sidebar]]
  parent = "sidebar-additional"
  name = "Working Group Operations"
  weight = 2
  url = "https://www.eclipse.org/org/working-groups/operations/"

[[sidebar]]
  parent = "sidebar-additional"
  name = "Working Group Development Effort Guidelines"
  weight = 3
  url = "https://www.eclipse.org/org/working-groups/wgfi-program/"
~~~
