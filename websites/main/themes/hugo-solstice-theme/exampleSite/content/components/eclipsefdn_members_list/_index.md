---
title: EclipseFdn Members List
hide_sidebar: true
---

You can add a members list to a markdown file using the shortcode:
`{{</* eclipsefdn_members_list */>}}`

## Parameters

| Name                  	| Type             	| Description                                                	|
|-----------------------	|------------------	|------------------------------------------------------------	|
| `class`               	| `string \| nil`  	| The class for the widget container.                         	|
| `id`                  	| `boolean \| nil` 	| The id for the widget container.                             	|
| `type`                	| `string \| nil`  	| The type of collaboration. e.g. `"working-group"`          	|
| `collaboration`       	| `string \| nil`  	| The collaboration id. e.g. `"jakarta-ee"`                  	|
| `level`               	| `string \| nil`  	| Comma separated list of levels to include. e.g. `"SD, AS"` 	|
| `sort`                	| `string \| nil`  	| Sort order. e.g. `"random"`                                	|
| `link_member_website` 	| `boolean \| nil` 	| Link member website to member item. Defaults to `true`.      	|

## Example

{{< eclipsefdn_members_list >}}

