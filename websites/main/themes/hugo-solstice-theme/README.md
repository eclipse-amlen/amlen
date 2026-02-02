# hugo-solstice-theme

The official [Hugo](https://gohugo.io/) theme from the Eclipse Foundation.

## Getting Started

Dependencies:


| Program | Version |
|---------|---------|
| node.js | 18.13.0 |
| Hugo | 0.144 |
| Git | > 2.31 |
| Make | > 4.3 |


Install dependencies, build assets and start a webserver:

```bash
make run
```

To run yarn watch and hugo server at the same time:

In one terminal:

```bash
yarn run watch
```

Once above process is done, in another terminal:

```bash
make run
```

### Getting Started (Windows)

To install our dependencies on Windows, replace the previous `npm install`  with this one:

```bash
set NODE_ENV=production && npm install
```

#### Alternative Solution

Install [win-node-en](https://github.com/laggingreflex/win-node-env) globally and then install our dependencies by following the steps from our [Getting Started](https://gitlab.eclipse.org/eclipsefdn/it/webdev/hugo-solstice-theme/#getting-started) section.

```bash
yarn add -g win-node-env
```

### Known Issues

Versions of Hugo 0.60 and beyond do not support raw HTML in markdown files by default. To enable this feature, unsafe HTML rendering can be enabled in the Goldmark engine in the site configuration. This is not recommended as it exposes rendered content vulnerable to injected content on the site.

## Contributing

1. [Fork](https://docs.gitlab.com/ee/user/project/repository/forking_workflow.html) the [solstice-assets](https://gitlab.eclipse.org/eclipsefdn/it/webdev/hugo-solstice-theme/) repository
2. Clone repository: `git clone https://gitlab.eclipse.org/[your_gitlab_username]/hugo-solstice-theme.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -m 'Add some feature' -s`
5. Push feature branch: `git push origin my-new-feature`
6. Submit a merge request

## Documentation

- <https://webdev.eclipse.org/docs/hugo>

## Bugs and Feature Requests

Have a bug or a feature request? Please search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://gitlab.eclipse.org/eclipsefdn/it/webdev/hugo-solstice-theme/-/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=).

## Author

**Christopher Guindon (Eclipse Foundation)**

- <https://twitter.com/chrisguindon>
- <https://github.com/chrisguindon>

## Trademarks

* Jakarta and Jakarta EE are Trademarks of the Eclipse Foundation, Inc.
* Eclipse® is a Trademark of the Eclipse Foundation, Inc.
* Eclipse Foundation is a Trademark of the Eclipse Foundation, Inc.

## Copyright and License

Copyright 2018-2021 the [Eclipse Foundation, Inc.](https://www.eclipse.org) and the [hugo-solstice-theme authors](https://gitlab.eclipse.org/eclipsefdn/it/webdev/hugo-solstice-theme/-/graphs/master). Code released under the [Eclipse Public License Version 2.0 (EPL-2.0)](https://gitlab.eclipse.org/eclipsefdn/it/webdev/hugo-solstice-theme/-/raw/master/LICENSE).
