FROM node:latest
RUN mkdir -p /usr/src/bookstore/api
WORKDIR /usr/src/bookstore/api
COPY package.json /usr/src/bookstore/api
RUN npm install
COPY . /usr/src/bookstore/api
EXPOSE 3000
CMD [ "npm", "start" ]