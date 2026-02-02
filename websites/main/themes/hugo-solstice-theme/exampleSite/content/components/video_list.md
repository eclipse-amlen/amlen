---
title: Video List
date: 2022-12-15
hide_sidebar: true
---

Renders a list of playlists. Accepts a comma-separated string of playlist IDs which correspond to IDs found on the [Media Link API](https://api.eclipse.org/).

{{< video_list playlist_ids="PLy7t4z5SYNaSruNciCsq79vfquXnZ7iTi, PLy7t4z5SYNaQejP4OMb-i3hC7-fO_u03j" src="playlists" >}}

## Parameters

### Providing playlist IDs

You can use the `playlist_ids` shortcode parameter to list out your playlist IDs. These need to be comma separated. 

The playlist ID needs to be from a channel which is managed by the [Media Link API](https://api.eclipse.org/). You can find a JSON list of accepted channels [here](https://api.eclipse.org/media/youtube/managed_channels).

#### Using a data file for playlists

You can use a data file to list out the playlists which you want to use for the `video_list` shortcode.
The parameter to specify the name of the data file is `src`.

```md
{{</* video_list src="playlists" */>}}
```

The example above will target `/data/playlists.yml`.

The data file should have an array at the top level. Within the array, you need an object with the `playlist_id` property.

This can also be used in combination with `playlist_ids`.

#### Having your data files work with localization

If you want to display different playlists for different locales, you can use the `src` parameter in combination with the `localize` parameter.

The `localize` parameter is a boolean.

```md
{{</* video_list src="playlists" localize="true" */>}}
```

The example above will target `/data/fr/playlists.yml` if the user's locale is "fr".

### Setting a max description length

You can change the max description character length using the `description_max` shortcode parameter. The default value is `200`.

```md
{{</* video_list playlist_ids="PLy7t4z5SYNaSruNciCsq79vfquXnZ7iTi" description_max="300" */>}}
```
