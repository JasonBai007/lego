#!/bin/bash

npm run build
git add .
git commit -m 'deploy'
git push