## About the project and folder structure

This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything.

- **src**: Inside the _src_ folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder)

- **config**: In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up dotenv so that we can use the environment variables anywhere in a cleaner fashion, this is done in the env.config.js. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

- **routes**: In the routes folder, we register a route and the corresponding middleware and controllers to it.

- **middlewares**: they are just going to intercept the incoming requests where we can write our validators, authenticators etc.

- **controllers**: they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

- **repositories**: this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

- **services**: contains the buiness logic and interacts with repositories for data from the database

- **utils**: contains helper methods, error classes etc.

## Setup the project

- Download this template from github and open it in your favourite text editor.
- Go inside the folder path and execute the following command:

```
yarn install
```

- In the root directory create a .env file and add the following env variables

```
POST=3000
```

- go inside the src folder and execute the following command:

```
npx sequelize init
```

- create a config.json file inside src/config folder and change the username, password, database and dialect

```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_developement",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
