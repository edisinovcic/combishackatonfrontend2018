FROM httpd:2.4-alpine
MAINTAINER Alen Hrga <ahrga93.gmail.com>

COPY httpd/httpd.conf /usr/local/apache2/conf/httpd.conf

COPY dist/combishackatonfrontend2018 /usr/local/apache2/htdocs
