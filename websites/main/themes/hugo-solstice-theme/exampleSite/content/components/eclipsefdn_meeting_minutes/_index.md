---
title: EclipseFdn Meeting Minutes
hide_sidebar: true
---

You can add meeting minutes to a markdown file using the shortcode:
`{{</* eclipsefdn_meeting_minutes */>}}`

{{< grid/div class="alert alert-warning stay-visible" isMarkdown="false" >}} This is for
demonstration only. The only link which is expected to work is under the
Specification Committee tab. {{</ grid/div >}}

{{< eclipsefdn_meeting_minutes >}}

## Parameters

| Name                      | Type     | Description |
| ------------------------- | -------- | ----------- | ------------------------------------------------------------- |
| `tabs_class`              | `string  | nil`        | replace the default class for the navigation tabs             |
| `yearly_sections_enabled` | `boolean | nil`        | splits meeting minutes into yearly sections if set to `true`. |

### Example of `tabs_class`

If your site has its own styles for navigation tabs, it may be using the
`.solstice-tabs` class. If you want the meeting minutes tabs to look identical
to your other tabs, pass in `solstice-tabs` or your own custom class into the
`tabs_class` parameter.

```
{{</* eclipsefdn_meeting_minutes tabs_class="solstice-tabs" */>}}
```

### More examples of parameters

- [yearly_sections_enabled example](./yearly_sections_enabled)

## Setup

To add meeting minutes, create a **meeting_minutes.yml** file in the data
folder. The YAML file should have a similar shape to the following:

```
dir: '/path/to/directory/with/committees/'
yearly_sections_enabled: true
order:
  - specification_committee
  - marketing_committee
items:
    marketing_committee:
        - title: August 18, 2022 (pdf)
          url: marketing_committee/2022-08-18-marketing-minutes.pdf
          year: 2022
    specification_committee:
        - title: June 28, 2018 (pdf)
          url: https://jakarta.ee/about/meeting_minutes/steering_committee/2018-06-28-specification-minutes.pdf
          year: 2018
```

#### Data File Properties

| Property | Description                                                                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dir`    | is the directory for which to search for the meeting minutes.                                                                                                                    |
| `order`  | modifies the order of the tabs. It needs to be an array of committee names corresponding to their key under `items`. If this is not set, the tabs will be alphabetically sorted. |
| `items`  | contains the committees such as `marketing_committee` and `specification_committee`. You can give the committee any key. This committee will appear as a tab on the component.   |
| `title`  | is the link text of a meeting minutes item.                                                                                                                                      |
| `url`    | locates the meeting minute file. If `dir` was set, it will locate the file from `dir`.                                                                                           |
| `year`   | is the year which the meeting was taken. This will dictate which year-section the item will appear under. This is not required if `yearly_sections_enabled` is set to `false`.   |
