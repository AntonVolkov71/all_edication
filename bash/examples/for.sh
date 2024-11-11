#!/usr/bin/env bash
for i in 1 2 3 4 5
do
    echo "$i"
done

for i in {10..2..2}
do
  echo "$i"
done

#for i in *; do echo "$i"; done

echo ""

for cities in "Belfast UK" "Milan ITALY" "Paris FRANCE"
do
  set -- $cities
  echo "$1 in $2"
done

echo ""
echo "$cities"
echo ""

i=0
for cities2
do
  echo "City $((i++)) is: $cities2"
done

echo ""

counter(){
  echo {10..1..2}
}

for i in $(counter) ; do
    echo "$i"
done

echo ""

for (( i = 0; i < 5; i++ )); do
    echo "By C style $i"
done