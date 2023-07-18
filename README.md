# Deliver Greeting Cards

This application allows users to automatically deliver greeting cards to users on specific dates via the [Lob](https://www.lob.com/) service.

There are three main components, a frontend written in React, an API written in Express.js, and a PostgreSQL database.

## Configuration

```
cp .env.example .env
```

Then fill out the environment variables in the `.env` file.

## Frontend

The code for the frontend exists in the `client` folder.

To start the application:

```
cd client
npm install && npm start
```

## Backend

The code for the API exists in the `server.js` file.

To start the application:

```
npm install && npm start
```
