#!/bin/bash

# Run npm install
npm install
cd publishhtmlreport
npm install
# Rename unsupported file name
mv node_modules/resolve/.github/workflows/node-4+.yml node_modules/resolve/.github/workflows/node-4.yml


## After Running bootstrap.sh, the repo is ready to be built. Do the usual npm run build to generate the vsix after updating the version number




