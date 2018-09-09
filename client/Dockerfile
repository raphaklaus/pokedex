FROM node:carbon

RUN mkdir -p /usr/src/client

WORKDIR /usr/src/client

COPY package.json /usr/src/client/
RUN npm install

COPY . /usr/src/client

CMD ./node_modules/.bin/parcel build /usr/src/client/index.html
