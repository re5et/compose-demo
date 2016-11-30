FROM node
WORKDIR /code
VOLUME /code
RUN npm install
CMD npm start
