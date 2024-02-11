FROM docker.io/library/node:21.1.0-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY app.js .

RUN npm install

CMD ["node", "app.js"]
