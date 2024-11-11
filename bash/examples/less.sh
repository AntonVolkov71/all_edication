#!/bin/bash
OK=10
NOT_OK=50
minor() {
  varr="$1"
  local no_var="$2"
  if (("$1" < "$2"))
  then
  echo "Integer $1 less than $2"
  return "$Ok"
  else
  echo "Integer $1 not less than $2.."
  fi

}

print_return() {
  if (("$1" == "$OK")) ; then
    echo "prev func return OK"
    exit 0
  else
    echo "prev func return NOT_OK"
    exit 1
}
echo "$varr"
minor "$1" "$2"
echo "$varr"
echo "$no_var"