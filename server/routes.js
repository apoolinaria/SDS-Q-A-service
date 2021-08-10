const controller = require('./controllers');
const router = require('express').Router();

// /qa/questions/?product_id=11003
router.get('/qa/questions?product_id', controller.questions.get);
// GET /qa/questions/:question_id/answers
router.get('/qa/questions/:question_id/answers', controller.answers.get);
// post question
router.post('/qa/questions?product_id', controller.questions.post);
// post answer
router.post('/qa/questions/:question_id/answers', controller.answers.post);
// update question helpful
router.put('/qa/questions/:question_id/helpful', controller.questions.put);
// update answer helpful
router.put('/qa/answers/:answer_id/helpful', controller.answers.put);
// update question REPORTED
router.put('/qa/questions/:question_id/report', controller.questions.put);
// update answer REPORTED
router.put('/qa/answers/:answer_id/report', controller.answers.put);

module.exports = router;
