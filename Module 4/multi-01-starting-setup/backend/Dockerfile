FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY  . .

EXPOSE 80

ENV MONGODB_USERNAME=root

ENV MONGODB_PWD=secret

CMD [ "npm", "start" ]