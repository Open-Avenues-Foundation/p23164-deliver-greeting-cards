require("dotenv").config();

const pg = require("pg");

// returns the postgres database client
function getDBClient() {
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

// insert event into events table
async function insertEvent(event_type, date, user_id, application_user_id, client) {
  const data_row = await client.query(
    "INSERT INTO events (event_type, date, user_id, application_user_id) VALUES ($1, $2, $3, $4) RETURNING *",
    [event_type, date, user_id, application_user_id],
  );
  return data_row.rows[0]; 
}

(async () => {
  let client;
  try {
    client = getDBClient();

    const event_type = process.argv[2];
    const date = process.argv[3];
    const user_id = process.argv[4];
    const application_user_id = process.argv[5];
    const event = await insertEvent(event_type, date, user_id, application_user_id, client);
    console.log(event);
  } catch (e) {
    console.log(e);
  } finally {
    client.end();
  }
})();
