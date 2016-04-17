#!/bin/bash
# author: v-joy
# date 2016-04-17
npm run p
scp -r dist root@v-joy.net:/etc/nginx/html/vr/front/
if [ "$1" == "all" ];then 
scp index.html root@v-joy.net:/etc/nginx/html/vr/front/
scp -r asset root@v-joy.net:/etc/nginx/html/vr/front/
fi
