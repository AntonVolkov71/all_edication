#!/bin/bash
echo -e "\n"
echo "The space left is ${disk_space:-default-nigrena} - tut nichego"
disk_space=`df -h | grep /$ | awk '{print $4}'`
echo "The space left is ${disk_space}"

print () {
  local TEST_LOCAL=zdraste
        TEST_SIMPLE=privet
  echo "inside TEST_LOCAL: ${TEST_LOCAL}"
  echo "inside TEST_SIMPLE: ${TEST_SIMPLE}"
}

print

echo "outside TEST_LOCAL: ${TEST_LOCAL}"
echo "outside TEST_SIMPLE: ${TEST_SIMPLE}"
