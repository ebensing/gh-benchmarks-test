#!/bin/bash

# this will automatically make a change and push it

echo "change!" >> change.txt

git commit -am "test commit" && git push
