#!/bin/sh

DIR="$(cd "$(dirname "$0")" && pwd)"

sh $DIR/clean-bundler.sh
node $DIR/clean-android.js
