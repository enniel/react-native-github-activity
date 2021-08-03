#!/bin/sh

BUILD_OUTPUT=ios/main.jsbundle
ASSET_DEST=ios

react-native bundle --entry-file index.js --platform ios --dev false --bundle-output $BUILD_OUTPUT --assets-dest $ASSET_DEST
