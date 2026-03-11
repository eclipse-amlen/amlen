---
Title: Agenda
container: "container-fluid"
hide_sidebar: true
---

Agendas can be added to the site through an `agenda.yaml` data file added in a subfolder of the data folder for the target locale (for localization, for default, create/use the "en" folder). An example of this path is as follows, `data/en/agenda.yaml`. The data should be similar to the following format:


```
complete: true
types:
    - name: Demo
      id: 1
      color: "#e44"
    - name: Keynote
      id: b2
      color: "#a0a"

items:
    - name: Open-source software
      presenter: Ken K.
      type: 1
      vod: "#1"
    - name: How to 'how to'
      presenter: Jim Bob
      type: b2
      vod: "#2"
    - name: Industry Keynote
      presenter: Eclipse Foundation, .etc
      type: b2
      vod: "#3"
    - name: Best practices for Interneting your Things
      presenter: Adam A.
      type: b2
      vod: "#4"
    - name: Break (2020 sample)
      time: 12:00pm EDT
      type: break
```

Types represent the different types of sessions being held at the event. Normally creating the CSS for these types will be created automatically on render based on the `color` passed in the data file. If no color is set, no CSS would be generated for the type. Additionally, a new CSS rule may be added via custom code. This rule should resemble the following, replacing `<id>` with the `id` value set in the type and `<color>` with a hex color code:

```
.eclipsefdn-agenda-legend-icon-<id>::after {
    background-color: <color>;
}
```

Items in these data files represent the actual sessions to be represented in the agenda.

**Note:** a modal is required on the page if an abstract has been defined within the agenda:

{{&lt; bootstrap/modal id="eclipsefdn-modal-event-session" &gt;}}


---

## Basic

Targets ./data/en/default/agenda.yaml:


{{< events/agenda >}}

---

## Different file name

Targets ./data/en/default/day_2.yaml:


{{< events/agenda src="day_2">}}

---

## Custom Title

Targets ./data/en/default/day_2.yaml:


{{< events/agenda title="Day 2 Agenda" src="day_2">}}

---

## Sub-site version

Targets ./data/en/sample/agenda.yaml:


{{< events/agenda event="sample">}}

---

## No session types

Targets ./data/en/no_types/agenda.yaml:


{{< events/agenda event="no_types">}}

---

## Active agenda

Targets ./data/en/active/agenda.yaml:

Adding a "times" list into the items in agenda.yaml above will show multiple times like last 2 rows below

{{< events/agenda event="active">}}

---

## Dynamic time based on user's timezone

Targets ./data/en/active/agenda_dynamic_time.yaml:

Set "dynamicTime" property to true to enable dynamic time.

If "timezone" is not set, it will take "GMT-04" as the default value. If the timezone for input time is different, please add it and set the value in this format: GMT-[xx] or GMT+[xx].

The output timezone will always be the user's timezone.

{{< events/agenda event="active" src="agenda_dynamic_time">}}

---

## Agenda w/ slides

Targets ./data/en/slides/agenda.yaml:

Adding a "times" list into the items in agenda.yaml above will show multiple times like last 2 rows below

{{< events/agenda event="slides">}}

---

## Agenda w/ event+year

Targets ./data/en/2020/sample/agenda.yaml:


{{< events/agenda year="2020" event="sample">}}

---

## Agenda w/ multiple streams

Targets ./data/en/multistream/agenda.yaml:


{{< events/agenda event="multistream">}}


{{< bootstrap/modal id="eclipsefdn-modal-event-session" >}}

---

## Agenda w/ Organization field

Targets ./data/en/organization/agenda.yaml:


{{< events/agenda event="organization">}}


{{< bootstrap/modal id="eclipsefdn-modal-event-session" >}}
