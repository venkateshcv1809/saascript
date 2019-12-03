FROM node:10.15.0

# Create app directory
WORKDIR /usr/src/saascript

# Install app dependencies
COPY package*.json /usr/src/saascript/
RUN npm install

# Bundle app source
COPY . /usr/src/saascript/
RUN npm run build

EXPOSE 8080
CMD ["npm", "start"]
