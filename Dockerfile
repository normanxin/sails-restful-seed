FROM node

MAINTAINER Norman Xin, norman.xin@gmail.com

# Install prerequisites
RUN npm -g install sails
RUN npm -g install forever

# Port 1337 for server
EXPOSE 1337
