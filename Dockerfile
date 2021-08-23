FROM node:12.16.3

WORKDIR /SDS-Q-A-service

COPY package.json .

RUN npm install


COPY . .

EXPOSE 3002

CMD [ "node", "./server/index.js"]