---
Title: Newsroom Events
hide_sidebar: true
---

## Default  

{{< newsroom/events >}}
 

## Default w/ title

{{< newsroom/events id="events-title" title="Events">}}

## Default w/ title + class

{{< newsroom/events id="events-title-class" title="Events" titleClass="heading-underline">}}
 
## Publish target (eclipse_org)

{{< newsroom/events id="events-pub-target" publishTarget="eclipse_org">}}


## Type (ve)

{{< newsroom/events id="events-type" type="ve">}}  


## Count (5) 

{{< newsroom/events id="events-count" count="5">}}


## Paginate  

{{< newsroom/events id="event-paginate" paginate="true" >}}

## Custom Date Format (`yyyy-MM-dd 'at' HH:mm`)

{{< newsroom/events id="event-date" dateFormat="yyyy-MM-dd 'at' HH:mm" >}}

## Archive  

{{< newsroom/events id="event-archive" archive="true" >}}

## Custom template (copy of events list template)

{{< newsroom/events id="event-template-id" templateId="custom-events-template" templatePath="/js/templates/event-list-format.mustache">}}
