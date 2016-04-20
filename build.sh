#!/bin/bash
# author: v-joy
# date 2016-04-17

type="${1-jsOnly}";

function uploadfile(){
scp -r dist root@v-joy.net:/etc/nginx/html/vr/front/
if [ "$type" == "all" ];then 
scp index.html root@v-joy.net:/etc/nginx/html/vr/front/
scp -r asset root@v-joy.net:/etc/nginx/html/vr/front/
fi
}


npm run p
if [ "$?" == "0" ];then
uploadfile
fi

