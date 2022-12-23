const { Quizz, TypeOfQuestions } = require('../Services/db');

const list = async (req, res, next) => {
  const listResult = await Quizz.find({});
  res.locals.status = 200;
  res.locals.message = listResult;

  next();
};

const add = async (req, res, next) => {
  res.locals.status = 200;
  res.locals.message = 'TODO';

  next();
};

const remove = async (req, res, next) => {
  res.locals.status = 200;
  res.locals.message = 'TODO';

  next();
};
const edit = async (req, res, next) => {
  res.locals.status = 200;
  res.locals.message = 'TODO';

  next();
};

const typeOfQuestion = async (req, res, next) => {
  const questionsTypeResult = await TypeOfQuestions.find({});
  res.locals.status = 200;
  res.locals.message = questionsTypeResult;

  next();
};

module.exports = {
  list,
  add,
  remove,
  edit,
  typeOfQuestion,
};
