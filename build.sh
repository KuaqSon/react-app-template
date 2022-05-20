#!/usr/bin/env bash

echo "Build Dist"
yarn run build:dist

echo "Remove old Build"
rm -rf build

echo "New Build"
mv ./dist ./build

