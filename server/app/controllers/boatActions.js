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

const read = async (req, res, next) => {
  try {
    const boat = await tables.boat.read(req.params.id);
    if (boat == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(boat);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const boat = req.body;
  const { id } = req.params.id;
  try {
    await tables.boat.update(boat, id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
};
