FROM node:22-slim

WORKDIR /app

# Copy the package and package-lock json files so that npm installs packages/dependencies
COPY package.json package-lock.json ./
RUN npm install

COPY server.js ./

EXPOSE 3000
CMD ["node", "server.js"]