# Stage 1: Build
FROM node:18 as build

WORKDIR /usr/src/app

COPY package.json /usr/src/app

# RUN npm cache clean

RUN npm install
#--force

COPY . /usr/src/app
RUN npm run build
# RUN chown -R node /app/node_modules

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/final-project /usr/share/nginx/html

EXPOSE 4200
# CMD ["npm","start"]
