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
        '/Users/polinachebanenko/Downloads/SDC-Data/answers.csv'
      );
      stream
        .pipe(csv())
        .pipe(
          through2({ objectMode: true }, (row, enc, cb) => {
            let answerData = [
              row.id,
              row.question_id,
              row.body,
              row.date_written,
              row.helpful,
              row.reported,
              row.answerer_name,
              row.answerer_email,
            ];

            let queryAnswers =
              'INSERT INTO answers (answer_id, question_id, body, created_at, score, reported, username, email) VALUES ($1,$2,$3,$4,$5,$6,$7,$8);';

            let queryPromises = [];
            queryPromises.push(
              client.query(queryAnswers, answerData).catch((err) => {
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
