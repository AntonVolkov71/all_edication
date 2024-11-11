#!/usr/bin/env bash

echo "Select fruit"
select item in apple banana orange;
do
  echo "You $item (Option $REPLY)"

  case "$item" in
      apple)
        echo "Goodbay gnida"
        break
        ;;
      *)
        echo "Choice again"
    ;;
  esac
done