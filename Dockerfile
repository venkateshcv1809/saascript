FROM node:12.16.3

# Create app directory
WORKDIR /usr/app/saascript

# Install app dependencies
COPY package*.json /usr/app/saascript/
RUN npm install

# Build app source
COPY . /usr/app/saascript/
RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]
