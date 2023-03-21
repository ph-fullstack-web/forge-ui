FROM node:16.14 as build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:16.14
WORKDIR /app
COPY package*.json .
RUN npm install --only=production
COPY --from=build /app/build ./build
CMD npx serve -s build