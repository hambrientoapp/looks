FROM node:12.14.0-alpine3.11
WORKDIR /usr/src/app
COPY package*.json ./
# RUN npm install
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
