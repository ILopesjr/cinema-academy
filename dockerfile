FROM node:18-alpine

WORKDIR /cinema_academy

COPY package*.json ./

RUN npm install

COPY . .

USER node

EXPOSE 3000
