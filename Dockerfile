# Stage-1: Install all modules
FROM node:14-alpine
ARG NPM_TOKEN

RUN apk add --no-cache git jq curl

WORKDIR /app
RUN printf \
"_auth = ${NPM_TOKEN}\n\
always-auth = true\n\
registry = https://ironsrc.jfrog.io/ironsrc/api/npm/npm-virtual" > /app/.npmrc
COPY package.json yarn.* npm-shrinkwrap*.json package-lock*.json ./
RUN npm ci
COPY . /app
EXPOSE 3000
CMD ["/bin/sh", "start.sh"]
