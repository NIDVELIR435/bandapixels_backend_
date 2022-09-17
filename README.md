## Description

This is backend repo for new CMC rework.
This repo has dependency with [Shared](https://bitbucket.org/babydestination/shared-backend/src/master/)
Setup this repo first!

## Installation

```bash
$ yarn;

```

## Running the app
```bash
# start postgres
$ docker start cmc-backend_db_1;

# development
$ yarn start

# or watch mode
$ yarn start:dev

# or production mode
$ yarn start:prod
```

## Swagger

To open swagger, open in your browser:
`http://localhost:3000/api/cmc/swagger/`

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Production deploy
- Clone repository
- `yarn submodule:update`
- `yarn install`
- `yarn build`
- `rm -rf node_modules`
- `rm -rf shared-backend/node_modules`
- `yarn install --production`
- replace ormconfig.json with environment ormconfig.json. Current file has db connection to local db. Should has connection to AWS db.
- `yarn docker:build`
- To check healthCheck open `<host>:8080/api/cmc/healthCheck`
