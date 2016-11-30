FROM node
WORKDIR /code
RUN npm install
CMD npm start
