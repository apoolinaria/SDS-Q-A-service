const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  password: 'popo',
  host: 'localhost',
  port: '5432',
  database: 'questionsandanswers',
});

client
  .connect()
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    client.end();
  });

module.exports = client;
