const apiRouter = require("express").Router();
const artistRouter = require("./artists.js");

apiRouter.use("/artists", artistRouter);

module.exports = apiRouter;
