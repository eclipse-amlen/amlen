---
title: 'HTML Tables'
table_classes: "table table-striped"
---

Table injection functionality has been added to the base theme for Hugo. This has been added in the partial `footer_hugo.html` for the actual JS, and a partial has been added to the head named `head_variables.html`. This file will contain variables used within the code that are set in site or page parameters.  

To change injected table classes, a parameter of `table_classes` can be set at either the page or site level. If not set, the default value of `table` will be injected to affect bootstrap table look and feel on tables.

Please note, that versions of Hugo 0.60 and beyond do not support raw HTML in markdown files by default. To enable this feature, unsafe HTML rendering can be enabled in the Goldmark engine in the site configuration. This site has not been configured to render unsafe content, meaning that the custom HTML table section will appear empty when running in versions of Hugo 0.60 and greater.


## Markdown table

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Custom HTML Table  

<table>
    <tr>
        <th>Sample</th>
        <th>Table</th>
        <th>Custom</th>
    </tr>
    <tr>
        <td>Class</td>
        <td>was</td>
        <td>injected</td>
    </tr>
</table>


## Custom HTML Table w/ class

<table class="custom">
    <tr>
        <th>Sample</th>
        <th>Table</th>
        <th>Custom</th>
    </tr>
    <tr>
        <td>Class</td>
        <td>wasn't</td>
        <td>replaced</td>
    </tr>
</table>