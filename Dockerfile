# Comment can be placed here 
FROM node:10.21.0-alpine as builder
RUN npm i -g json-server
WORKDIR /app
COPY package.json package-lock.json ./
RUN set -xe \
    && apk add --no-cache nodejs nodejs-npm \
    && npm i -g json-server \
    && rm -rf /tmp/npm* /var/cache/apk/* \
    && npm install
COPY . .
EXPOSE 3000
CMD ["json-server", "--watch", "/app/src/data/db.json", "--routes", "/app/routes.json"]
EXPOSE 3000