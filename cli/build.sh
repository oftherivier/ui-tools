#!/bin/bash
. $OTR_BASE
extendOtr build

scssDone=false

:scss() {
  [[ $scssDone == true ]] && return
  local src="${1:-src/scss/index.scss}"
  local destScssDir="${2:-dist/scss}"
  postcss --syntax postcss-scss -mu postcss-preset-env "$src" --dir "$destScssDir"
  scssDone=true
}

:css() {
  :scss $@
  local src="${1:-src/scss/index.scss}"
  local srcBase="$(basename $src)"
  local destScssDir="${2:-dist/scss}"
  local destCssDir="${2:-dist/css}"
  sass "$destScssDir/$srcBase" "$destCssDir/$srcBase"
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
