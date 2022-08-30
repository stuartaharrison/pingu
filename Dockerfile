FROM node:16

WORKDIR /app

# copy everything we care about across
COPY package*.json ./

# Bundle app source
COPY . .

# install the server-side packages
RUN npm install
RUN npm run build

# Make the standard attachments
RUN mkdir -p /app/content

# Set the environment to production
ENV NODE_ENV production

# Label docker image
LABEL version="0.1"
LABEL maintaner="Stuart Harrison"
LABEL release-date="30-08-2022"

# running the server will expose & run the react-client too!
EXPOSE 6323
CMD ["node", "index.js"]