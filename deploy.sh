#!/bin/sh

docker build -t registry.infra.cbd.int:5000/lbcd-portal .
docker push registry.infra.cbd.int:5000/lbcd-portal
