const tables = require("../../database/tables");

const tileExists = async (req, res, next) => {
  const coords = req.body;

  if (coords.coord_x > 11 || coords.coord_y > 5) {
    res.sendStatus(422);
    return;
  }

  try {
    const tiles = await tables.tile.readByCoordinates(
      coords.coord_x,
      coords.coord_y
    );

    if (tiles) {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = tileExists;
