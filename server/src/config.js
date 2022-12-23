const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  mode: process.env.NODE_ENV,
  corsAllowURL: process.env.CORSALLOWURL,
  mongoURL: process.env.MONGO_URL,
};
