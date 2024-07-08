const TileRepository = require("../../database/models/TileRepository");

const tileExists = async (req, res, next) => {
  const { coordX, coordY } = req.body;

  try {
    const tile = await TileRepository.readByCoordinates(coordX, coordY);
    if (tile) {
      next()
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = tileExists;
