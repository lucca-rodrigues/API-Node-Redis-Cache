const {
  getValue,
  setValue,
  setValueWithExpire,
} = require("../Services/redisClient");

async function cacheMiddleware(req, res, nex) {
  const { organization } = req.params;

  const dataInCache = await getValue(organization);

  if (dataInCache) {
    return res.status(200).json(dataInCache);
  }

  res.sendResponse = res.json;
  res.json = async (body) => {
    await setValueWithExpire(organization, body, 10);
    return res.sendResponse(body);
  };

  return nex();
}

module.exports = cacheMiddleware;
