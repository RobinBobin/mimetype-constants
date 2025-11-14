#!/bin/bash
rm -rf dist &&
pnpm tsc --outDir dist/js &&
pnpm tsc \
  --module commonjs \
  --moduleResolution node \
  --outDir dist/cjs \
  --verbatimModuleSyntax false
pnpm eslint &&
pnpm prettier . --check
