FROM node:alpine3.21
# node:alpine3.21
# node:10-alpine
# node:14.21.3-slim
# node:14.21.3-alpine
# node:14.21-alpine

RUN mkdir -p /home/node/app/node_modules
# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm update
# We might be able to use mongoose@5.7.0 at the latest, but mongoose@3.6.3 is an option
RUN npm install mongoose
# We might need to use this version of ejs
RUN npm install ejs
RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]