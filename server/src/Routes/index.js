const app = require("express");
const frontRouter = app.Router();

const {sFrontError} = require("../Services/errorHandler");

// Routes
const quizzRoutes = require("./quizzRoutes");

//Mount routes
frontRouter.use("/quizz", quizzRoutes);

//Error handler
frontRouter.use(sFrontError);

//Send response
frontRouter.use(async (req, res, next) => {
    await res.status(res.locals.status).json(res.locals.message);
});

module.exports = frontRouter;
