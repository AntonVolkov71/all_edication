#!/usr/bin/env bash

echo "We are into the directory"
pwd
echo "What is our PATH?"
echo ${PATH}

echo "Now we expand the path for all the shell"
export PATH=${PATH}:~/tmp

echo "And now our PATH is..."
echo ${PATH}
echo "We are looking for the setting.sh script!"
which setting.sh
echo "Found it!"

echo "Time for magic!"
echo  "We are looking for the setting.sh script!"
env PATH=/usr/bin which setting.sh
echo "BOOOO, nothing!"