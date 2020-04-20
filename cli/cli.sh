#!/bin/bash
. $OTR_BASE

:build() {
  call "$DIR/build" $@
}

:slint() {
  : # todo
}

:start() {
  webpack-dev-server --config ./webpack.dev.config.js --open-page dev
}

run $@
