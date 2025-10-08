FROM nginx:alpine

COPY . /usr/share/nginx/html/
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8083

LABEL description = "oget565_website"



