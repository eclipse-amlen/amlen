---
title: "Eclipse Foundation Projects using Static Source"
hide_sidebar: true
---

When this shortcode is passed `is_static_source`, you must provide it a `url` which points to a json resource.

*If you are on localhost, ensure you disable CORS in your browser to view.*

**Example:**
{{< eclipsefdn_projects
    is_static_source="true"
    url="/docs/hugo/data/static-projects.json"
    templateId="tpl-projects-item"
>}}

