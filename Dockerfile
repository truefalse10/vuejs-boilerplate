FROM node:carbon
ARG KPI_API_URL
ENV KPI_API_URL=$KPI_API_URL
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
RUN npm install
COPY . /usr/src/app
RUN npm run build

FROM node:carbon
EXPOSE 8043
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY --from=0 /usr/src/app/dist ./usr/src/app/dist
COPY --from=0 /usr/src/app/server ./usr/src/app/server
RUN npm i express morgan
CMD node usr/src/app/server/server.js
