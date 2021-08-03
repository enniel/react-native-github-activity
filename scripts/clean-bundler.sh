#!/bin/sh

watchman watch-del-all

rm -rf $TMPDIR/react-native-packager-cache-* && echo "$TMPDIR/react-native-packager-cache-* - ok"
rm -rf $TMPDIR/metro-bundler-cache-* && echo "$TMPDIR/metro-bundler-cache-* - ok"
rm -rf $TMPDIR/metro-cache && echo "$TMPDIR/metro-cache - ok"
rm -rf $TMPDIR/haste-map-metro-5-* && echo "$TMPDIR/haste-map-metro-5-* - ok"
