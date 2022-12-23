// getting-started.js
const mongoose = require('mongoose');
const { mongoURL } = require('@/config');

const connect = async () => {
  try {
    await mongoose.connect(mongoURL);
  } catch (err) {
    console.log(err);
  }
};

const quizzSchema = new mongoose.Schema({
  name: String,
});
const typeOfQuestionsSchema = new mongoose.Schema({
  name: String,
  label: String,
});
const Quizz = mongoose.model('quizz', quizzSchema);
const TypeOfQuestions = mongoose.model('TypeOfQuestions', typeOfQuestionsSchema);

module.exports = {
  connectDB: connect,
  closeDB: mongoose.close,
  Quizz,
  TypeOfQuestions,
};
