#!/bin/bash
. "$OTR_BASE"
extend "$OTR_DIR/build"

:scss() {
  local src="${1:-src/scss/**/*.scss}"
  local destDir="${2:-dist/scss}"
  postcss --syntax postcss-scss -mu postcss-preset-env --dir "$destDir" "$src"
}

:css() {
  local src="${1:-dist/scss/index.scss}"
  local dest="${2:-"dist/css/$OTR_PKG_NAME.css"}"
  mkdir -p $(dirname $dest)
  sass $src $dest
}

:styles() {
  :scss
  :css
}

:all() {
  :styles
  :scripts
}

run $@
