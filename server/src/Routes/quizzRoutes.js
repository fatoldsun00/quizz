const express = require('express');

const quizzRouter = express.Router();
const quizzController = require('../Controllers/quizzController');
const i18n = require('../Services/i18n');

quizzRouter.use((req, res, next) => {
  i18n.setLocale(req?.query?.lang || 'fr');
  next();
});

quizzRouter.route('/').get(quizzController.list);
quizzRouter.route('/add').post(quizzController.add);
quizzRouter.route('/delete').delete(quizzController.remove);
quizzRouter.route('/edit').patch(quizzController.edit);
quizzRouter.route('/typeOfQuestion').patch(quizzController.typeOfQuestion);

module.exports = quizzRouter;
