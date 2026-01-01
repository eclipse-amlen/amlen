---
title: Paginated Video List
date: 2022-12-15
hide_sidebar: true
---

Renders an aggregated, paginated and filterable list of videos from playlists.

{{< paginated_video_list count="4" src="paginated_video_list_playlists" >}}

## How it works

This shortcode uses Hugo's [resources.GetRemote](https://gohugo.io/functions/resources/getremote/) function to fetch YouTube RSS feeds for each playlist in real-time during site build. This means:

- Content is fetched at build time, not runtime, ensuring fast page loads
- Videos are automatically updated when the site is rebuilt
- No API keys are required since it uses YouTube's public RSS feeds

Note that since resources.GetRemote works at build time, any changes to the YouTube playlists will only be reflected after rebuilding the site.

## Parameters

#### Using a data file for playlists

You can use a data file to list out the playlists which you want to use for the `paginated_video_list` shortcode.
The parameter to specify the name of the data file is `src`.

```md
{{</* paginated_video_list src="playlists" */>}}
```

The example above will target `/data/playlists.yml`.

The data file should have an array at the top level. Within the array, you need an object with the `title` and `id` properties.

#### Having your data files work with localization

If you want to display different playlists for different locales, you can use the `src` parameter in combination with the `localize` parameter.

The `localize` parameter is a boolean.

```md
{{</* paginated_video_list src="playlists" localize="true" */>}}
```

The example above will target `/data/fr/playlists.yml` if the user's locale is "fr".

### Setting a max description length

You can change the max description character length using the `description_max` shortcode parameter. The default value is `200`.

```md
{{</* paginated_video_list src="playlists" description_max="100" */>}}
```

### Setting items per page

You can control how many videos appear on each page using the `count` parameter. The default value is `6`.

```md
{{</* paginated_video_list src="playlists" count="8" */>}}
```