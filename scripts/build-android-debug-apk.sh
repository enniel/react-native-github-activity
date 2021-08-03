#!/bin/sh

DIR="$(cd "$(dirname "$0")" && pwd)"

sh $DIR/prebuild-android.sh
cd ./android
./gradlew clean assembleDebug
