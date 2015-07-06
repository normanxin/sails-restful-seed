FROM node

MAINTAINER Norman Xin, norman.xin@gmail.com

# Install prerequisites
RUN npm install --global sails
RUN npm install --global gulp
RUN npm install --global forever

# Port 1337 for server
EXPOSE 1337
