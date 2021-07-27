# Stage-1: Install all modules
FROM node:14-alpine
ARG NPM_TOKEN

RUN apk add --no-cache git jq curl

WORKDIR /app
COPY package.json package-lock*.json ./
RUN npm ci
COPY . /app
EXPOSE 3000
CMD ["/bin/sh", "start.sh"]
