---
title: "Featured Story"
date: 2019-06-23T15:50:36-04:00
description: ""
categories: []
keywords: []
slug: ""
aliases: []
toc: false
draft: false
show_featured_story: true
show_featured_footer: false
---

You can add a featured story to a markdown file using the page parameter: `show_featured_story: true`  

To add featured stories, a new entry can be submitted via the [Newsroom site](https://newsroom.eclipse.org/) using the [Add Featured Story](https://newsroom.eclipse.org/node/add/featured-story) page if you have access. To update what content is retrieved from the featured content API, a parameter of `featured_content_publish_target` can be set in the page or site parameters. This parameter would apply to both the featured footer and featured story content and would be the publish target for the given site (e.g. `eclipse_org`, `eclipse_iot`, `jakarta_ee`).

If there are multiple valid stories at a single time to display, the component will randomly select one and display it on the page.

The right side content, which can hold ad content or other static content such as links to newsletter mailing lists, are set up with raw HTML. This content is authored in the `featuredstory.yml` file in the `data` folder of the site. These sections are freeform and allows flexibility for this content.

~~~~
defaultRight: |
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </p>
          <p>Sign up to our <br>Newsletter</p>
          <form action="https://eclipsecon.us6.list-manage.com/subscribe/post" method="post" target="_blank">
            <div class="form-group">
              <input type="hidden" name="u" value="eaf9e1f06f194eadc66788a85">
              <input type="hidden" name="id" value="98ae69e304">
            </div>
            <input type="submit" value="Subscribe" name="subscribe" class="button btn btn-primary">
          </form>
~~~~

**Examples:**

Included above the content of this page is a sample of the featured story component.
