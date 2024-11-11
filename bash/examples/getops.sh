#!/usr/bin/env bash

source library.lib
non_zero_input "$#"

if (( $# == 0 ))
then
   echo "Please, give at least one option on the command line"
exit 1
fi
while getopts "ax:f" option
do
  case $option in
  a | f)
    echo "You selected $option"
  ;;
  x)
    echo "You selected $option with argument $OPTARG"
  ;;
  ?)
    echo "Invalid switch: -$OPTARG"
  ;;
  :)
    echo "No argumenrs provided: -$OPTARG"
  ;;
  esac
done

echo "$OPTIND and the argument was $OPTIND"
shift "$((OPTIND-1))"
echo "But at the end of the script we have this left on the command line: $*"
echo $@
color_print ${Yellow} "But we  output: $@ \n"

echo -e "${Green} But ${CReset} at command line: ${Red}$@${CReset}"

color_print ${Yellow} "But we can use our color_print function to have a fancy output: $@"
