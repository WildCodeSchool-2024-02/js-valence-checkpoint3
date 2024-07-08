const tables = require("../../database/tables");

const tileExists = async (req, res, next) => {
  try {
    const tiles = await tables.tile.readByCoordinates(
      req.body.coord_x,
      req.body.coord_y
    );
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
