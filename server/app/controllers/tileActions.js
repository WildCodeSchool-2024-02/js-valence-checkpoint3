const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const tiles = await tables.tile.readAll();
    res.status(200).json(tiles);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { coordX, coordY } = req.body;

  try {
    await tables.tile.update({ id, coordX, coordY });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = { browse, update };
