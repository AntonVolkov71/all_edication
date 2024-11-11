#!/usr/bin/env bash

if [ ! 11 -eq11 ] ; then
  echo "false"
else
  echo "true"
fi

echo $((x=1, 7-2))

echo ${x}


if [ 3 -ne 7 ]; then
    echo "Exit"
elif [ 3 -gt 7 ]; then
    echo "Next"
else
    echo "OK"
fi