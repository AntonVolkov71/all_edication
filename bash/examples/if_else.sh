#!/usr/bin/env bash
echo "Input your age: "

read user_input

if [ ${user_input} -ge 10 ] && [ ${user_input} -le 20 ]
then
  echo "Great your ${user_input} between 10 to 20"
elif [ ${user_input} == 24 ] ; then
    echo "Your input 24"
else
  echo "Your ${user_input} not between 10 20"
fi