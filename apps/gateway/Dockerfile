FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
COPY ../../ ./
WORKDIR /app/apps/gateway
RUN npm install --production
CMD ["node", "dist/apps/gateway/main.js"]