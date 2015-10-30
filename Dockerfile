FROM maven:3.2-jdk-8-onbuild
MAINTAINER Reto Gmür <me@farewellutopia.com>

#Prepare
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Build
COPY ./ /usr/src/app
RUN mvn install -DfinalName=marmotta

ENTRYPOINT ["java"]
CMD ["-jar", "webapp/target/marmotta.jar"]
