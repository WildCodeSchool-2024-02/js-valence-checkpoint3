const tables = require("../../database/tables");

const tileExists = async (req, res, next) => {
  const { coord_x: x, coord_y: y } = req.body;

  try {
    const tiles = await tables.tile.readByCoordinates(x, y);
    if (tiles.length === 0) {
      res.sendStatus(422);
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = tileExists;
