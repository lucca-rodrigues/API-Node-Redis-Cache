const githubAPI = require("../Services/githubAPI");

async function listAllRepositoriesByOrg(req, res) {
  try {
    const { organization } = req.params;
    const { data } = await githubAPI.get(`/orgs/${organization}/repos`);

    const { login, id, avatar_url } = data[0].owner;

    const organizationData = { login, id, avatar_url };

    const formattedRepositories = [];

    for (const repository of data) {
      formattedRepositories.push({
        id: repository?.id,
        name: repository?.name,
        private: repository?.private,
        url: repository?.url,
        created_at: repository?.created_at,
        language: repository?.language,
      });
    }
    return res
      .status(200)
      .json({ org: organizationData, repos: formattedRepositories });
  } catch (error) {
    return res.status(400).json({ message: "Falha ao listar repositórios" });
  }
}

module.exports = { listAllRepositoriesByOrg };
