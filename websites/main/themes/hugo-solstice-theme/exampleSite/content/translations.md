---
title: "Translations of the Hugo Solstice theme"
description: "A guide to translating the Hugo Solstice theme into new languages."
date: 2020-01-19T00:00:00-04:00
email: "test@demo.com"
---

So you want to translate your site, eh? Here are a few things you'll need! The first thing isn't a file, but a code, a language code. This should be the ISO 639-1 code that represents the language you wish to translate for the site. An easily read list of these codes can be found on the [Wikipedia page for ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). This code will be used a few times, so please note it down.

## [Eclipsefdn/hugo-solstice-theme](https://gitlab.eclipse.org/eclipsefdn/it/webdev/hugo-solstice-theme) requirements:
1. Create a new file for the new language based on `./i18n/en.toml`. Copy this file into the same folder and rename it `<YOUR ISO 639-1 CODE>.toml`. This file will be made available to all sites once updated and includes all of the required labels needed for translation in basic sites. Update all of the terms to represent your new value.


    Example For the [Spanish translation file, es.toml](https://gitlab.eclipse.org/eclipsefdn/it/webdev/hugo-solstice-theme/blob/master/i18n/es.toml)
    ```
    [navbar-manage-cookies-label]
      other = "Manage Cookies"
    ```

    Becomes:
    ```
    [navbar-manage-cookies-label]
      other = "Administrar cookies"
    ```

2. Update the [default languages file of the example site](https://gitlab.eclipse.org/eclipsefdn/it/webdev/hugo-solstice-theme/blob/master/exampleSite/config/_default/languages.toml). While not strictly required, updating this file can help preview and troubleshoot the changes being made within the translation files. In this section, copy the English section and paste it at the end of the file and make the following updates:
    - Update the language code in brackets in the first line with your language code
    - update the `languageName` property to have a value of the language's name in its own language
    - Increment the `weight` to be one greater than the greatest weight currently available. This only impacts the order of languages appearing in the language selector dropdown and does not impact content otherwise.

    Example using Spanish:
    ```
    [en]
      languageName = "English"
      weight =  1
    ```
    Becomes:
    ```
    [es]
      languageName = "Español"
      weight =  3
    ```

3. If you are making a sample in the example site for the newly translated language, please also complete the following steps:
    - in `./exampleSite/content`, copy the `_index.md` file and paste it into the same folder, renaming it `_index.es.md`. This will set up the homepage for the new language for easy testing. For the example site, this is the only required page as we want to ensure that the language properly works with all of the labels.
    - In `./exampleSite/config/_default`, copy the [menus.en.toml file](https://gitlab.eclipse.org/eclipsefdn/it/webdev/hugo-solstice-theme/blob/master/exampleSite/config/_default/menus.en.toml), pasting and renaming to `menus.<YOUR ISO CODE.toml`. This doesn't need to be translated, as it just ensures that the site compiles properly in the given language.

## Target site requirements

To enable the site to use the new language, a few things need to happen. If there is a translation file for the site (found under the i18n directory in the root of the project if it's present), repeat step 1 from the Hugo-solstice-theme section within this site. Keep the files separate, as they will need to be put in the proper site to keep site-specific terminology out of the main theme.

Within the `./config.toml` file, a few changes will need to be made:
1. in the `[languages]` section, a new subsection should be added for the new language. This will differ slightly from the change made in step 2 of the hugo-solstice-theme changes as only our example site has had the configuration values split into multiple files for easier management (while this is planned for the future, it is not currently scheduled to be done).

    If the [languages] section is not present, please add it to the file containing both English (our default language) and the new language. An example can be seen in the [Jakarta.EE site configuration file](https://github.com/jakartaee/jakarta.ee/blob/src/config.toml#L197) which has the English and Chinese languages set.

    Example)
    ```
      [languages.en]
        languageName = "English"
        weight =  1
    ```
    Becomes:
    ```
      [languages.es]
        languageName = "Español"
        weight =  1
    ```

2. Create language copies of the site metadata properties needed for search engine returns. There are a couple of site properties injected on every page for things like the page title, keywords for search engines, and generic site descriptions if none are set for pages. These properties need to be created as a subsection beneath the `[languages]` section to ensure they are properly registered on the site. The properties that need to be translated are as follows:
    - description
    - subtitle
    - keywords

   Example)
   ```
    [languages.es.params]
            description = "Sample description"
            subtitle = "Sample site | subtitle"
            keywords = ["keyword 1", "keyword 2", "keyword 3"]
    ```

3. Create a copy of the current English menus available in the config file for the alternate language. These menus will either be labeled under `[[menu.*]]` or `[[languages.en.menu.*]]`, where the asterisk is any normal string value that represents the name of the menu. The primary required menu to translate is the `main` menu, though there may be other menus defined as required for the normal function of a site under alternate language. One of the more common additional menus as an example is the `sidebar` menu.

    If `languages.en` is not set in front of the `main.menu` entries that are copied, add `languages.<ISO code>` in front of the name (e.g. `[[menu.main]]` becomes `[[languages.es.menu.main]]`). Each of the name fields in the copied menu entries should be translated, and the URLs should be updated to reflect the translated page path (e.g. `/community/resources` would become `/es/community/resources`).

In addition to the config.toml changes, any pages that are required for the new site language should be translated. This is typically all pages in the `./content` folder, though this may vary from site to site. On copying the English versions, they should be named `<page name>.<ISO code>.md`

A release of hugo-solstice-theme needs to be done by the EF webdev team containing the translation values. This will allow for the targeting of a version of the theme with the new translation values. The EF team will be able to increment the version of the theme for the site (as there are some checks we need to do to make sure everything is compatible with the new version).