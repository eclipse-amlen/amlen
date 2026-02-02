/*!
 * Copyright (c) 2021, 2023 Eclipse Foundation, Inc.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * Contributors:
 *   Christopher Guindon <chris.guindon@eclipse-foundation.org>
 *   Olivier Goulet <olivier.goulet@eclipse-foundation.org>
 *
 * SPDX-License-Identifier: EPL-2.0
*/

require('./node_modules/eclipsefdn-solstice-assets/webpack-solstice-assets.mix.js');
let mix = require('laravel-mix');
mix.EclipseFdnSolsticeAssets();

mix.setPublicPath('static');
mix.setResourceRoot('../');

mix.less(
  './node_modules/eclipsefdn-solstice-assets/less/quicksilver/styles.less', 
  'static/css/quicksilver.css'
);

mix.less(
  './node_modules/eclipsefdn-solstice-assets/less/astro/main.less', 
  'static/css/astro.css'
);

mix.less(
  './node_modules/eclipsefdn-solstice-assets/less/neptune/main.less', 
  'static/css/neptune.css'
);

mix.js(
  ['./node_modules/eclipsefdn-solstice-assets/js/main.js'],
  './static/js/solstice.js'
);
mix.js(
  ['./node_modules/eclipsefdn-solstice-assets/js/astro.js'],
  './static/js/astro.js'
);
mix.js(
  ['./node_modules/eclipsefdn-solstice-assets/js/neptune.js'],
  './static/js/neptune.js'
);

mix.js(['./node_modules/eclipsefdn-solstice-assets/js/solstice/eclipsefdn.projects.ts'], './static/js/eclipsefdn.projects.js');

mix.js(
  ['./node_modules/eclipsefdn-solstice-assets/js/solstice/eclipsefdn.promotion.js'],
  './static/js/eclipsefdn.promotion.js'
);
