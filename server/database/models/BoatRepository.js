const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(where) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table

    let query = `
      SELECT b.*, t.type, t.has_treasure
      FROM ${this.table} b
      JOIN tile t
      ON b.coord_x = t.coord_x
      AND b.coord_y = t.coord_y
    `;
    const params = [];

    // WHERE b.name = ?
    if (where && where.name) {
      query += `WHERE b.name = ?`;
      params.push(where.name);
    }

    const [rows] = await this.database.query(query, params);

    // Return the array of boats
    return rows;
  }

  async update(boat) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`,
      [boat.coord_x, boat.coord_y, boat.id]
    );
    return result.affectedRows;
  }
}

module.exports = BoatRepository;
