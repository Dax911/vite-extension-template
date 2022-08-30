# syntax=docker/dockerfile:1

FROM node:16-alpine

ARG PORT=3000
ENV PORT $PORT

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG EXTENSION_ID=
ENV EXTENSION_ID $EXTENSION_ID

ARG BASE_URL=https://localhost:$PORT
ENV BASE_URL $BASE_URL

ARG LOGOUT_REDIRECT=/
ENV LOGOUT_REDIRECT $LOGOUT_REDIRECT
ARG INDEX_REDIRECT=https://ACME.com
ENV INDEX_REDIRECT $INDEX_REDIRECT

ARG SITE_TITLE=ACME
ENV SITE_TITLE $SITE_TITLE

ARG AUTH0_CLIENT_ID=
ENV AUTH0_CLIENT_ID $AUTH0_CLIENT_ID
ARG AUTH0_BASE_URL=https://ACME.us.auth0.com
ENV AUTH0_BASE_URL $AUTH0_BASE_URL
ARG AUTH0_CLIENT_SECRET=
ENV AUTH0_CLIENT_SECRET $AUTH0_CLIENT_SECRET
ARG AUTH_SECRET=
ENV AUTH_SECRET $AUTH_SECRET
ARG AUTH0_AUDIENCE=https://api.ACME.com/
ENV AUTH0_AUDIENCE $AUTH0_AUDIENCE

RUN npm install -g npm@7 nodemon

#RUN mkdir /opt/node_app && chown node:node /opt/node_app
#WORKDIR /opt/node_app
#USER node
#COPY --chown=node:node package.json package-lock.json* ./
#RUN npm install --no-optional && npm cache clean --force
#ENV PATH /opt/node_app/node_modules/.bin:$PATH

WORKDIR /app
COPY . .
RUN npm install

EXPOSE ${PORT}

RUN ls -al -R

CMD ["node", "index.js"]
