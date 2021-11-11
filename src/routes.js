const { Router } = require("express");
const {
  listAllRepositoriesByOrg,
} = require("./Controllers/RepositoriesController");

const routes = Router();

routes.get("/", (req, res) => {
  return res.send("Api started, ok!");
});

routes.get("/repositories/:organization", listAllRepositoriesByOrg);

module.exports = routes;
