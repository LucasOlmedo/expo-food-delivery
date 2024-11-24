FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --global expo-cli
RUN npm install --global @expo/ngrok

RUN npm install

COPY . .

EXPOSE 19000 19001 19002 19006 8081

CMD ["npx", "expo", "start", "--tunnel", "-c"]
