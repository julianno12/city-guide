#!/usr/bin/env bash

set -ex

cd $TRAVIS_BUILD_DIR/mobile/docker

docker build \
    -t $BUILD_IMAGE \
    --build-arg VERSION_CODE=$TRAVIS_BUILD_NUMBER \
    -f Build.dockerfile \
    ..

docker build \
    -t $DEPLOY_IMAGE \
    --build-arg VERSION_CODE=$TRAVIS_BUILD_NUMBER \
    -f Deploy.dockerfile \
    .
