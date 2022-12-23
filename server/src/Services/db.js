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
const Quizz = mongoose.model('quizz', quizzSchema);

module.exports = {
  connectDB: connect,
  Quizz,
};
