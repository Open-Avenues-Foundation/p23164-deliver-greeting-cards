require('dotenv').config()

const pg = require('pg');

// returns the postgres database client
function getDBClient () {
  const client = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });
  client.connect();
  return client;
}

// TODO: insert user into users table
function insertUser () {

}

(async () => {
    let client;
    try {
        client = getDBClient();

        const name = process.argv[2];
        const address_id = process.argv[3];

        const user = insertUser(name, address_id);
        console.log(user);
    } catch (e) {
        console.log(e);
    } finally {
        client.end();
    }
})();
