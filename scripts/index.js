require("dotenv").config();

const Lob = require("lob")(process.env.LOB_API_KEY);
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

// fetch the user by the user_id
async function getUser(client, user_id) {
  const response = await client.query("SELECT * FROM users WHERE id = $1", [
    user_id,
  ]);
  return response.rows[0];
}

// get the events for next week
async function getUpcomingEvents(client) {
  const date = new Date();

  let datePlus7Days = new Date(date.setDate(date.getDate() + 7));
  datePlus7Days = datePlus7Days.toISOString().split("T")[0];

  console.log("checking for date", datePlus7Days);

  const response = await client.query("SELECT * FROM events WHERE date = $1", [
    datePlus7Days,
  ]);

  return response.rows;
}

// sends a postcard using the lob api
async function sendPostcard(address_id, event_type, user_name) {
  console.log(`sending postcard to ${user_name} for ${event_type}`);
  await Lob.postcards.create({
    to: address_id,
    front: `<h1> Happy ${event_type}, ${user_name}!`,
    back: "<h1> This is an automated postcard from your dear friend!",
  });
}

(async () => {
  let client;
  try {
    client = getDBClient();
    const events = await getUpcomingEvents(client);

    for (let ev of events) {
      console.log(ev);
      const user = await getUser(client, ev.user_id);
      sendPostcard(user.address_id, ev.event_type, user.name);
    }
  } catch (e) {
    console.log(e);
  } finally {
    client.end();
  }
})();
