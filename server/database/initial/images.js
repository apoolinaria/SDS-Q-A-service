const csv = require('csv-parser');
const fs = require('fs');
const through2 = require('through2');

const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  password: 'popo',
  host: 'localhost',
  port: '5432',
  database: 'sdc',
});

client
  .connect()
  .then(() => {
    console.log('Connected');

    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(
        '/Users/polinachebanenko/Downloads/SDC-Data/answers_photos.csv'
      );
      stream
        .pipe(csv())
        .pipe(
          through2({ objectMode: true }, (row, enc, cb) => {
            let imgData = [row.id, row.url, row.answer_id];

            let queryImg =
              'INSERT INTO images (image_id, image_url, answer_id) VALUES ($1,$2,$3);';

            let queryPromises = [];
            queryPromises.push(
              client.query(queryImg, imgData).catch((err) => {
                console.log(err);
              })
            );

            Promise.all(queryPromises)
              .then((results) => {
                console.log(results.length, ' were resolved');
                cb(null, true);
              })
              .catch((err) => {
                console.log('error after unpauce', err);
                cb(err, null);
              });
          })
        )
        .on('data', function (row) {
          console.log('saved a row');
        })
        .on('end', function () {
          resolve();
          console.log('Data loaded');
        });
    });
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    client.end();
  });
