#!/bin/sh

cd /usr/src/app

rm -rf tests/*
mkdir tests/expected
mkdir tests/actual
mkdir tests/diff
mv expected/* tests/expected/

npm start
