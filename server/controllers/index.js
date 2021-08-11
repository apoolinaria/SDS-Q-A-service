const models = require('./../models');

exports.questions = {
  get: function (req, res) {
    models.questions.getQuestionByProductId((err, data) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.json(data);
      }
    });
  },
};
