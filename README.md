# Hosted Founders' Club

This project was based on https://www.digitalocean.com/community/tutorials/how-to-build-a-graphql-api-with-prisma-and-deploy-to-digitalocean-s-app-platform#step-7-%E2%80%94-defining-the-data-model-with-prisma-migrate

The goal of this project is to provide a hosted and abstract version of the Founders' Club matching system that can be used by other organizations.

## Stack

Digital Ocean Apps
Docker
GraphQL
Node.js
Postgres
[Prisma](https://www.prisma.io/)
Typescript?

## Running the project

`npm run start`

## Deploy

`git push origin master`

## Develop

`npm run start`
`docker-compose up -d`

### Close the DB

`docker-compose down`

### Close the DB and delete all data

`docker-compose down -v`
