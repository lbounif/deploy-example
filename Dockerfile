FROM node:12
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 10010
CMD npm start
