#!/bin/bash
export PATH="/Users/mac/.nvm/versions/node/v24.18.0/bin:$PATH"
cd "$(dirname "$0")/.."
exec node node_modules/next/dist/bin/next dev --turbo -p 9002
