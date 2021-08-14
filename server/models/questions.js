const db = require('./../database');

module.exports = {
  getQuestionByProductId: (id, callback) => {
    const queryString = `SELECT * FROM questions WHERE product_id=${id}`;
    db.query(queryString, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },
};
