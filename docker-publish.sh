#!/bin/bash

docker tag trycodecatch-frontend:latest alenhrga/trycodecatch-frontend:latest

docker login
docker push alenhrga/trycodecatch-frontend:latest
