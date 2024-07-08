const tables = require("../../database/tables");

const tileExists = async (req, res, next) => {
  try {
    const result = await tables.tile.readByCoordinates(
      req.body.coord_x,
      req.body.coord_y
    );
    if (result.length === 0) {
      res.sendStatus(422);
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = tileExists;
