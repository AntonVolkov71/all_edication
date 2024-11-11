#!/usr/bin/env bash

read -p "Enter first str " VAR1
read -p "Enter second str " VAR2

if [ "$VAR1" = "$VAR2" ]; then
    echo "String equal"
else
    echo "String NOT equal"
fi


if [[ "$VAR1" =~ .*nto*. ]]; then
  echo "$VAR1 includes 'nto'"
else
   echo "$VAR1 NOT includes 'nto'"
fi
