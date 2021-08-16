const db = require('./../database');

module.exports = {
  getQuestionByProductId: (id, callback) => {
    const queryString = `SELECT * FROM questions INNER JOIN answers ON answers.question_id = questions.question_id \
    FULL OUTER JOIN images ON images.coresponding_answer = answers.answer_id WHERE product_id=${id} ORDER BY questions.question_id`;

    db.query(queryString, (err, data) => {
      if (err) {
        callback(err);
      } else {
        let queryData = {
          product_id: data.rows[0].product_id,
          result: [],
        };
        let questionObj = [];
        data.rows.forEach((question) => {
          let isReported = question.reported ? true : false;
          // if questions id is the same as current question id just add the answers
          let currentQuestion = question.question_id;
          let doesExist = questionObj.findIndex(
            (id) => id.question_id === currentQuestion
          );

          let answId = question.answer_id;
          if (doesExist === -1) {
            let innerObj = {
              question_id: question.question_id,
              question_body: question.body,
              question_date: new Date(parseInt(question.created_at)),
              asker_name: question.username,
              question_helpfulness: question.score,
              reported: isReported,
              answers: {},
            };
            answerObj = {
              id: question.answer_id,
              body: question.text,
              date: new Date(parseInt(question.date)),
              answerer_name: question.name,
              helpfulness: question.votes,
              photos: [question.image_url],
            };

            let anotherfuckingobject = {};
            anotherfuckingobject[answId] = answerObj;
            innerObj.answers = anotherfuckingobject;

            questionObj.push(innerObj);
          } else {
            answerObj = {
              answer: {
                id: question.answer_id,
                body: question.text,
                date: new Date(parseInt(question.date)),
                answerer_name: question.name,
                helpfulness: question.votes,
                photos: [question.image_url],
              },
            };
            questionObj.forEach((q) => {
              if (q.question_id === currentQuestion) {
                let anotherQ = {};
                anotherQ[answId] = answerObj;
                let assigned = Object.assign(q.answers, anotherQ);
              }
            });
          }
        });
        queryData.result.push(questionObj);
        callback(null, queryData);
      }
    });
  },
};
