FROM node:latest
WORKDIR /usr/src/app/food-app-fe
COPY . ./
RUN npm install
RUN chmod -R 777 /usr/src/app/food-app-fe/node_modules/
EXPOSE 8080
CMD ["npm", "run", "dev"]