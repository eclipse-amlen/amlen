---
title: "List wrapper"
date: 2019-06-23T15:50:36-04:00
description: ""
categories: []
keywords: []
slug: ""
aliases: []
toc: false
draft: false
show_featured_story: false
show_featured_footer: false
---

The list wrapper component allows for more complex HTML lists to be created while retaining the ability to input markdown content into list items. While the List wrapper is the recommended way of getting complex list outputs to keep markdown rendering more cleanly, a secondary option is also available to groups more experienced with raw HTML code.

_Note: all code samples in this page have had short code `<` and `>` characters replaced with `&lt;`  and `&gt;` to ensure that it is rendered correctly in preview. When using this code, these characters should be replaced._

## Custom list (raw HTML using grid/div component)

Shortcode:  
```text  
{{&lt; grid/div isMarkdown="false" &gt;}}
<ul>
    <li>
        Sample nested
        <ol style="list-style-type: lower-roman">
            <li>Sample content as shortcodes:</li>
            <ul style="list-style-type: circle">
                <li>Test 1</li>
                <li>Test 2</li>
            </ul>
            <li>Test 2</li>
            <li>
                <p>Sample content as markdown</p>
                <ul>
                    <li>Test</li>
                    <li>Test2</li>
                </ul>
            </li>
        </ol>
    </li>
    <li>Second bullet</li>
</ul>
{{&lt;/ grid/div &gt;}}
```

Output:  
{{< grid/div isMarkdown="false" >}}
<ul>
    <li>
        Sample nested
        <ol style="list-style-type: lower-roman">
            <li>Sample content as shortcodes:</li>
            <ul style="list-style-type: circle">
                <li>Test 1</li>
                <li>Test 2</li>
            </ul>
            <li>Test 2</li>
            <li>
                <p>Sample content as markdown</p>
                <ul>
                    <li>Test</li>
                    <li>Test2</li>
                </ul>
            </li>
        </ol>
    </li>
    <li>Second bullet</li>
</ul>
{{</ grid/div>}}

## Basic unordered list

Shortcode:
```text
{{&lt; html/list_wrapper &gt;}}  
  {{&lt; html/li &gt;}}Test 1{{&lt;/ html/li &gt;}}  
  {{&lt; html/li &gt;}}Test 2{{&lt;/ html/li &gt;}}  
  {{&lt; html/li &gt;}}Test 3{{&lt;/ html/li &gt;}}  
{{&lt;/ html/list_wrapper &gt;}}  
```

{{< html/list_wrapper >}}
  {{< html/li >}}Test 1{{</ html/li >}}
  {{< html/li >}}Test 2{{</ html/li >}}
  {{< html/li >}}Test 3{{</ html/li >}}
{{</ html/list_wrapper >}}


## Basic ordered list

Shortcode:
```text
{{&lt; html/list_wrapper listType="ol" &gt;}}  
  {{&lt; html/li &gt;}}Test 1{{&lt;/ html/li &gt;}}  
  {{&lt; html/li &gt;}}Test 2{{&lt;/ html/li &gt;}}  
  {{&lt; html/li &gt;}}Test 3{{&lt;/ html/li &gt;}}  
{{&lt;/ html/list_wrapper &gt;}}  
```

Output:  
{{< html/list_wrapper listType="ol" >}}
  {{< html/li >}}Test 1{{</ html/li >}}
  {{< html/li >}}Test 2{{</ html/li >}}
  {{< html/li >}}Test 3{{</ html/li >}}
{{</ html/list_wrapper >}}


## Basic unordered list with list style

Shortcode:
```text
{{&lt; html/list_wrapper listStyle="circle" &gt;}}  
    {{&lt; html/li &gt;}}Test 1{{&lt;/ html/li &gt;}}  
  {{&lt; html/li &gt;}}Test 2{{&lt;/ html/li &gt;}}  
  {{&lt; html/li &gt;}}Test 3{{&lt;/ html/li &gt;}}  
{{&lt;/ html/list_wrapper &gt;}}  
```

Output:  
{{< html/list_wrapper listStyle="circle" >}}
  {{< html/li >}}Test 1{{</ html/li >}}
  {{< html/li >}}Test 2{{</ html/li >}}
  {{< html/li >}}Test 3{{</ html/li >}}
{{</ html/list_wrapper >}}


## Basic ordered list with list style

Shortcode:
```text
{{&lt; html/list_wrapper listType="ol" listStyle="lower-roman" &gt;}}  
  {{&lt; html/li &gt;}}Test 1{{&lt;/ html/li &gt;}}  
  {{&lt; html/li &gt;}}Test 2{{&lt;/ html/li &gt;}}  
  {{&lt; html/li &gt;}}Test 3{{&lt;/ html/li &gt;}}  
{{&lt;/ html/list_wrapper &gt;}}  
```

Output:  
{{< html/list_wrapper listType="ol" listStyle="lower-roman" >}}
  {{< html/li >}}Test 1{{</ html/li >}}
  {{< html/li >}}Test 2{{</ html/li >}}
  {{< html/li >}}Test 3{{</ html/li >}}
{{</ html/list_wrapper >}}

## Complex/nested lists

Example of mixed shortcode and markdown lists. Supports shortcode and markdown being fully interchangable

Shortcode:
```text
- Sample nested
  {{&lt; html/list_wrapper listType="ol" listStyle="lower-roman" &gt;}}
    {{&lt; html/li &gt;}}Sample content as shortcodes:{{&lt;/ html/li &gt;}}
{{&lt; html/list_wrapper listStyle="circle" &gt;}}
  {{&lt; html/li &gt;}}Test 1{{&lt;/ html/li &gt;}}
  {{&lt; html/li &gt;}}Test 2{{&lt;/ html/li &gt;}}
{{&lt;/ html/list_wrapper &gt;}}
    {{&lt; html/li &gt;}}Test 2{{&lt;/ html/li &gt;}}
    {{&lt; html/li &gt;}}Sample content as markdown
- Test  
- Test2  
    {{&lt;/ html/li &gt;}}
  {{&lt;/ html/list_wrapper &gt;}}  
- Second bullet
```

Output:  
- Sample nested
  {{< html/list_wrapper listType="ol" listStyle="lower-roman" >}}
    {{< html/li >}}Sample content as shortcodes:{{</ html/li >}}
{{< html/list_wrapper listStyle="circle" >}}
  {{< html/li >}}Test 1{{</ html/li >}}
  {{< html/li >}}Test 2{{</ html/li >}}
{{</ html/list_wrapper >}}
    {{< html/li >}}Test 2{{</ html/li >}}
    {{< html/li >}}Sample content as markdown
- Test  
- Test2  
    {{</ html/li >}}
  {{</ html/list_wrapper >}}  
- Second bullet
