#!/bin/sh

yarn prettier
yarn jshint

yarn prod
# flyctl launch - host
