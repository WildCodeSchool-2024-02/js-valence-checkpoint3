const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" tables
    const [rows] = await this.database.query(
      `select b.id, b.name, t.type, t.has_treasure, b.coord_x, b.coord_y from ${this.table} as b join tile AS t ON t.coord_x = b.coord_x AND t.coord_y = b.coord_y`
    );

    // Return the array of boats
    return rows;
  }

  async update(boat) {
    const [rows] = await this.database.query(
      `update ${this.table} set coord_x = ?, coord_y = ? where id = ?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );
    return rows.affectedRows;
  }
}

module.exports = BoatRepository;
