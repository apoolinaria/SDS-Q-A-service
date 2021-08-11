const csv = require('csv-parser');
const fs = require('fs');

let questions = [];
let answers = {};

fs.createReadStream('/Users/polinachebanenko/Downloads/SDC-Data/questions.csv')
  .pipe(csv())
  .on('data', function (row) {
    questions.push(row);
  })
  .on('end', function () {
    console.log('Data loaded');
    console.log(questions);
  });
