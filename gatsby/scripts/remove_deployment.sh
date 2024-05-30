#!/bin/bash

currdir=`pwd`

remove_list () {
    rm -r "~partytown" \
          "404" \
          "icons" \
          "page-data" \
          "static" \
          "_gatsby"
    rm *.webmanifest \
       *.xml \
       *.png \
       *.json \
       *.js* \
       *.html 
       2>/dev/null
}

cd ..

remove_list
