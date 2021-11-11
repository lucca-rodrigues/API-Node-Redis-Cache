const githubAPI = require("../Services/githubAPI");

async function listAllRepositoriesByOrg(req, res) {
  const { organization } = req.params;
  const response = await githubAPI.get(`/orgs/${organization}/repos`);

  return res.status(200).json(response?.data);
}

module.exports = { listAllRepositoriesByOrg };
