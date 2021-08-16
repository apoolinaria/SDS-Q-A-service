const db = require('./../database');

module.exports = {
  getAnswers: (id, callback) => {
    const queryString = `SELECT * FROM answers FULL OUTER JOIN images ON answers.answer_id =images.coresponding_answer WHERE question_id=${id}`;
    db.query(queryString, (err, data) => {
      console.log(data);
      if (err) {
        callback(err);
      } else {
        let queryObj = {
          question: data.rows[0].question_id,
          page: 1,
          count: data.rows.length,
          result: [],
        };
        data.rows.forEach((answer) => {
          let innerObj = {
            answer_id: answer.answer_id,
            body: answer.text,
            date: new Date(parseInt(answer.date)),
            answerer_name: answer.name,
            helpfulness: answer.votes,
            photos: [{ id: answer.image_id, url: answer.image_url }],
          };
          queryObj.result.push(innerObj);
        });
        callback(null, queryObj);
      }
    });
  },
};
