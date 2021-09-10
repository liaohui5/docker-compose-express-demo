# base image
FROM node:lts-alpine

# copy code to image
COPY . /usr/www/webapp

# cd to path
WORKDIR /usr/www/webapp

# install dependency
RUN npm install

# expose port
EXPOSE 5555

# start server
CMD ["node", "app.js"]
