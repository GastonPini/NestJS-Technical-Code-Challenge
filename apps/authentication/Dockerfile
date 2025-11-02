FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
COPY ../../ ./
WORKDIR /app/apps/authentication
RUN npm install --production
CMD ["node", "dist/apps/authentication/main.js"]