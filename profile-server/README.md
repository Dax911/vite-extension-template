This is a [Express](https://expressjs.com/) project designed to be an invisible proxy.

## Getting Started

### Using Docker

Install the latest version of [Docker Desktop](https://www.docker.com/products/docker-desktop/) and run the following command in the project folder

```bash
docker-compose up
```

### Using NPM or Yarn

Run the following command in the project folder

```bash
npm start
# or
yarn start
```

### Production

The preferred method of deployment is through docker

## Environment Variables

`NODE_ENV`: `production` | `development`

`PORT`: The port to run on, defaults to `3000` for development

`EXTENSION_ID`: The extension id

`BASE_URL`: The url that is being used without a trailing space, defaults to `http://localhost:3000` (used with Auth0 and Cors)

`LOGOUT_REDIRECT`: Where logining out redirects the user to, defaults to `/`

`INDEX_REDIRECT`: Where the user is redirected to when they hit `/` or a `404`

`SITE_TITLE`: The title of the site

`AUTH0_CLIENT_ID`: The client id for the Auth0 app (must be a `Regular Web` app)

`AUTH0_BASE_URL`: The Auth0 app domain

`AUTH0_CLIENT_SECRET`: The Auth0 app secret

`AUTH0_AUDIENCE`: The Auth0 api audience

`AUTH_SECRET`: (optional) A unique cryptographic signature (has a default)

> Default values can be seen in the `docker-compose.yml`

