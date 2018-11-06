#!/usr/bin/env bash

set -ex

docker image rm \
    $BUILD_IMAGE \
    $DEPLOY_IMAGE
