#!/bin/sh

docker build -t localhost:5000/lbcd-portal git@github.com:scbd/lbcd-portal

docker push localhost:5000/lbcd-portal
