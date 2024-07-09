const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `select b. *, t.type, t.has_treasure FROM ${this.table} b join tile t on b.coord_x = t.coord_x AND b.coord_y = t.coord_y`
    );

    // Return the array of boats
    return rows;
  }

  async update(boat) {
    const [rows] = await this.database.query(
      `update ${this.table} set coord_x = ?, coord_y = ?  where id = ?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );
    return rows.affectedRows;
  }
}

module.exports = BoatRepository;
