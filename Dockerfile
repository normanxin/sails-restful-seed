FROM node

MAINTAINER Norman Xin, norman.xin@gmail.com

# Install prerequisites
RUN npm -g install sails

# Port 3000 for server
EXPOSE 1337
