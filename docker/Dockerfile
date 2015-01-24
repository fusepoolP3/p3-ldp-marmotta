# FROM postgres:latest
FROM ubuntu:14.04
# MAINTAINER Reto Gmür <reto.gmuer@bfh.ch>

RUN apt-get update && apt-get install -y openjdk-7-jdk wget

ADD run /usr/local/bin/ldp-marmotta



ADD system-config.properties /tmp/marmotta/system-config.properties

RUN chmod +x /usr/local/bin/ldp-marmotta && \
    adduser --disabled-password --gecos "P3 Ldp instance" --uid 1000 p3ldp
#    mkdir -p /home/p3ldp && \
#    echo "p3ldp:x:1000:1000:p3ldp,,,:/home/p3ldp:/bin/bash" >> /etc/passwd && \
#    echo "p3ldp:x:1000:" >> /etc/group && 

RUN cd /usr/local/lib/ && \
   wget https://github.com/fusepoolP3/p3-ldp-marmotta/releases/download/v0.1.0-20150124/marmotta-v0.1.0-20150124.jar

# USER p3ldp
ENV HOME /home/p3ldp
WORKDIR /home/p3ldp
CMD /usr/local/bin/ldp-marmotta
