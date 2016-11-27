FROM node
add . /code
WORKDIR /code
VOLUME /code
RUN npm install
CMD npm start
