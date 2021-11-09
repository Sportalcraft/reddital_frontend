# pull official base image
FROM node:14-alpine3.14

# create the app directory for inside the Docker image
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
#ENV PATH /app/node_modules/.bin:$PATH

# copy and install app dependencies from the package.json (and the package-lock.json) into the root of the directory created above
COPY package*.json ./
RUN npm i

# bundle app source inside Docker image
COPY . .

# expose port to have it mapped by Docker daemon
EXPOSE 3000

# define the command to run the app (it's the npm start script from the package.json file)
CMD [ "npm", "start" ]


