const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  password: 'popo',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: 'sdc',
});

client
  .connect()
  .then(() => {
    console.log(process.env.DB_HOST);
    console.log('Connected');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = client;
