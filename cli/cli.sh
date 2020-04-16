#!/bin/bash
. $OTR_BASE

:build() {
  call build $@
}

:slint() {
  : todo
}

:start() {
  webpack-dev-server --config ./webpack.dev.config.js
}

run $@
