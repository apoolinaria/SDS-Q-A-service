const db = require('./../database');

module.exports = {
  getAnswers: (id, callback) => {
    const queryString = `SELECT * FROM answers WHERE question_id=${id}`;
    db.query(queryString, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },
};
