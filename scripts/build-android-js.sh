#!/bin/sh

BUILD_OUTPUT=android/app/src/main/assets/index.android.bundle
ASSET_DEST=android/app/src/main/assets/res

react-native bundle --platform android --dev false --entry-file index.js --bundle-output $BUILD_OUTPUT --assets-dest $ASSET_DEST
