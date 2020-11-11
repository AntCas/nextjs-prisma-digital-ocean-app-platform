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

## Running the project for the first time

1. Download and install Docker
2. `npm install`
3. Copy the prisma environment and edit it with correct information.

`cp prisma/example.env prisma/.env`

Get the current `DATABASE_URL` from another dev on the team, you need:

username, password, portnumber, database name

4. `npm run start`

### Hidden files to be aware of
.gitignore
prisma/.env

## Deploy

`git push origin master`

## Develop

`npm run start`
`docker-compose up -d`

### Close the DB

`docker-compose down`

### Close the DB and delete all data

`docker-compose down -v`

### Migrations

Migrations are managed by Prisma and should be run everytime a change is made to the database schema.

#### Create Migration
`npm run make-migration "migration name"`

#### Run Migration
`npm run migrate-up`

#### Create Prisma Client
`npx prisma generate`

#### Run migration against production DB
`DATABASE_URL="Get this string from the production DB" npm run prod-migrate`
