---
Title: Eclipse Foundation Projects Page
hide_sidebar: true
---

The **`eclipsefdn_projects`** shortcode renders a working group's projects. They
can be filtered by category or search.

## Parameters

| Name                 | Type            | Description                                                                       |
| -------------------- | --------------- | --------------------------------------------------------------------------------- |
| `templateId`         | `string \| nil` | The mustache template to use.                                                     |
| `url`                | `string`        | URL of the PMI endpoint to use.                                                   |
| `types`              | `string \| nil` | Types of projects to display. Accepts the following: `"projects"`, `"proposals"`. |
| `classes`            | `string \| nil` | Classes for the block.                                                            |
| `display_categories` | `bool`          | Toggle the display of category filters.                                           |
| `categories`         | `string \| nil` | Path to the JSON file containing project categories.                              |
| `is_static_source`   | `bool \| nil`   | If projects are from an endpoint other than the PMI, set this to `true`.          |
| `sorting_method`     | `string \| nil` | Accepts the following: `"alphanumeric"`, `"random"`.                              |
| `page_size`          | `number \| nil` | Set the maximum number of projects to display.                                    |

## Examples

Following list of projects has been filtered to display "Jakarta EE" projects, randomly sorted, and with a page size of 3:

{{< eclipsefdn_projects templateId="tpl-projects-item"
    url="https://projects.eclipse.org/api/projects?working_group=jakarta-ee"
    classes="margin-top-30" 
    display_categories="true"
    categories="/js/featured-projects-categories.json"
    page_size="8" 
>}}

{{< grid/div isMarkdown="false" >}}
    <script type="text/javascript" src="/js/eclipsefdn.projects.js"></script>
{{</ grid/div >}}
