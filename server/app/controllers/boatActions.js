const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await tables.boat.readAll();
    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  const boat = { ...req.body, id: req.params.id };
  try {
    const affectedRows = await tables.boat.update(boat);
    res.status(204).json(affectedRows);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,edit
};
