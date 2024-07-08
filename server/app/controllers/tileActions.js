
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const tile = await tables.tile.readAll();
    res.status(200).json(tile);
  } catch (err) {
    next(err);
  }
};

module.exports = {browse};
