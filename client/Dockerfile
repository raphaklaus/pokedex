FROM node:boron

RUN npm install webpack -g

RUN mkdir -p /usr/src/client

WORKDIR /usr/src/client

COPY package.json /usr/src/client/
RUN npm install

COPY . /usr/src/client

CMD webpack -p
