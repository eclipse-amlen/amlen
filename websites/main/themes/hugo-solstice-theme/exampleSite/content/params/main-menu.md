---
title: Main Menu
main_menu: main_menu_demo
hide_sidebar: true
---

The `main_menu` parameter allows you to use a different navigation bar menu.
This page uses the `main_menu` parameter to show the "Custom Menu" on the
navigation bar above.

If `main_menu` is not specified, it will use the default `main` menu from the
config.toml, or menus.toml file.

## Example

Let's create an example which uses a menu named `my_custom_menu`.

config.toml:

```
[[menu.my_custom_menu]]
    name = "home"
    url = "/awesome-event-2022"
    weight = 1

[[menu.my_custom_menu]]
    name = "News"
    url = "/awesome-event-2022/news"
    weight = 2
```

We want this custom menu to appear on a section named "awesome-event-2022" whose
url is located at "/awesome-event-2022". To do this, we need to add the front
matter parameter `main_menu` in our markdown file for awesome-event-2022.

awesome-event-2022/\_index.md:

```
---
title: Awesome Event 2022
main_menu: my_custom_menu
layout: single
---

This is the home page for the Awesome Event 2022
```

### Front Matter Cascade

You can use the `cascade` front matter parameter to make all subpages use the
new menu as well:

```
---
title: Awesome Event 2022
layout: single
cascade:
    main_menu: my_custom_menu
---

This is the home page for the Awesome Event 2022
```

For more information about `cascade`, visit the
[Hugo docs](https://gohugo.io/content-management/front-matter/#front-matter-cascade).
