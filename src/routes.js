const { Router } = require("express");
const {
  listAllRepositoriesByOrg,
} = require("./Controllers/RepositoriesController");

const cacheMiddleware = require("./Middlewares/CacheMiddleware");

const routes = Router();

routes.get("/", (req, res) => {
  return res.send("Api started, ok!");
});

routes.get(
  "/repositories/:organization",
  cacheMiddleware,
  listAllRepositoriesByOrg
);

module.exports = routes;
