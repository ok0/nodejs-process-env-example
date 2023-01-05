FROM node:18.12.1

WORKDIR /usr/src/app

COPY package*.json ./
COPY test ./test

RUN npm ci --slient

CMD npm run test