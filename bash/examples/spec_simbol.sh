#!/bin/bash

name=${1}
familia=${2}
age=${3}
zero=${0}
echo "zero: ${zero}"
echo "#: ${#}"
echo "@: ${@}"
echo "*: ${*}"
nohup ps &
echo "!: ${!}"

echo "Name: ${name:-defaultName}, familia: ${familia:defaultFamilia}, age: ${age:-defaultAge}"
echo "?: ${?}"


