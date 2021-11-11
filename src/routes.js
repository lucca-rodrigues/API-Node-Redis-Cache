const { Router } = require("express");
const RepositoriesController = require("./Controllers/RepositoriesController");
const routes = Router();

routes.get("/", (req, res) => {
  return res.send("Api started, ok!");
});

routes.get(
  "/repositories/:organization",
  RepositoriesController.listAllRepositoriesByOrg
);

module.exports = routes;
