const models = require('./../models');

exports.questions = {
  get: function (req, res) {
    models.questions.getQuestionByProductId(
      req.query.product_id,
      (err, data) => {
        if (err) {
          console.log('controller', err);
          res.sendStatus(400);
        } else {
          res.json(data);
        }
      }
    );
  },
};
exports.answers = {
  get: function (req, res) {
    models.answers.getAnswers(req.params.question_id, (err, data) => {
      if (err) {
        console.log('answers controller', err);
        res.sendStatus(400);
      } else {
        res.json(data);
      }
    });
  },
};
