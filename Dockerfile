FROM node:boron-wheezy
MAINTAINER Sebastian Boolean

EXPOSE 8080

COPY . /usr/app
WORKDIR /usr/app

RUN npm install
RUN npm run build
CMD ["npm", "start"]
