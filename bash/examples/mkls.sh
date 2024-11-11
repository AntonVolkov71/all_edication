#!/bin/bash
mkls() {
  mkdir -- "$1" "$2" && ls -dl -- "$1" "$2" ;
}