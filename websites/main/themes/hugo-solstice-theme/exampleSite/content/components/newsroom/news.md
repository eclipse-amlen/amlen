---
Title: Newsroom news
hide_sidebar: true
---

Note: each news container on a given page needs a unique ID. If an ID is not provided on a page with multiple news blocks, functionality may become unstable. 

## Default  

{{< newsroom/news >}}

## Default w/ title

{{< newsroom/news id="news-title" title="News">}}

## Default w/ title + class

{{< newsroom/news id="news-title-class" title="News" titleClass="heading-underline">}}
 
 
## Publish target (eclipse_org)

{{< newsroom/news id="news-pub-target" publishTarget="eclipse_org">}}


## Type (community_news)

{{< newsroom/news id="news-type" type="community_news">}}  


## Count (5) 

{{< newsroom/news id="news-count" count="5">}}


## Paginate  

{{< newsroom/news id="news-paginate" id="event-list-container-paginate" paginate="true" >}}

## Custom Date Format (`QQQ yyyy`) 

{{< newsroom/news id="news-date" id="event-list-container-date" dateFormat="QQQ yyyy" >}}


## Custom template (copy of news no match height template)

{{< newsroom/news id="news-template-id" templateId="custom-news-template" templatePath="/js/templates/news-no-mh.mustache">}}
