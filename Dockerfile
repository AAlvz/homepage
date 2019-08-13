FROM node:10.16-alpine
WORKDIR /app
ADD . /app

RUN apk add yarn
RUN yarn
RUN node_modules/gulp/bin/gulp.js dist
