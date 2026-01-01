#!/usr/bin/env bash
# ===========================================================================
# Copyright (c) 2021 Eclipse Foundation and others.
# All rights reserved. This program and the accompanying materials
# are made available under the terms of the Eclipse Public License v1.0
# which accompanies this distribution, and is available at
# http://www.eclipse.org/legal/epl-v10.html
#
# Contributors:
#    Christopher Guindon (Eclipse Foundation)
# ==========================================================================

set -euo pipefail

yarn install --frozen-lockfile;
yarn run build
hugo --source exampleSite --theme "${PWD##*/}" --themesDir ../../ --gc --minify --destination ."${1}" --baseURL "${2}"