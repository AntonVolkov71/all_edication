#!/bin/bash
mkcd() {
  if (($# != 1)) ; then
    printf >&2 'Надо ровно один арргруграгур\n'
    return 1;
  fi
  mkdir -p -- "$1" && cd -- "$1" ;
}