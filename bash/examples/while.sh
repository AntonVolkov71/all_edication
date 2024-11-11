#!/usr/bin/env bash
i=5
while  (( i > 0)); do
    echo "$((i--))"
done

a=1
until (( a > 5)); do
    echo "$((a++))"
done

echo ""

while true
do
  clear
  cat <<MENU
  BACKUP UTIL v 1.0
  ------------------
  1. Backup a file/directory
  2. Restore a file/directory
  0. Quit
  ------------------
MENU
  read -p "Please select an option, 0 or Q to exit: " option
  case $option in
  1 | [Bb])
  echo "You chose the first option, Backup"
  sleep 3
  ;;
  2 | [Rr])
  echo "You chose the second option, Restore"
  sleep 3
  ;;
  0 | [Qq])
  echo "You chose the third options, Quit, so we quit!"
  break
  ;;
  *)
  echo "Not a valid choice, please select an option..."
  sleep 3
  ;;
  esac
done

echo ""

while true
do
  clear
  echo "This text will dead from 3 seconds"
  sleep 1
  clear
  echo "This text will dead from 2 seconds"
  sleep 1
  clear
  echo "This text will dead from 1 seconds"
  sleep 1
  clear
done