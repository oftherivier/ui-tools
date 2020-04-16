#!/bin/bash
. $OTR_BASE

:js() {
  eslint ${@:-.}
}

:scss() {
  echo todo
}

:all() {
  :scss
  :js
}

hook:empty() {
  :all
}

run $@
