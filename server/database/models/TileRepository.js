const AbstractRepository = require("./AbstractRepository");

class TileRepository extends AbstractRepository {
  constructor() {
    super({ table: "tile" });
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} ORDER BY coord_y, coord_x`
    );
    return rows;
  }

  async getRandomIsland() {
    const [rows] = await this.database.query(
      `SELECT id FROM ${this.table} WHERE type="island" ORDER BY rand() LIMIT 1`
    );
    return rows[0];
  }

  async hideTreasure(island) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET has_treasure =
        CASE
          WHEN id = ? THEN true
          ELSE false
        END`,
      [island.id]
    );
    return result;
  }

  async readByCoordinates(coordX, coordY) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE coord_x = ? AND coord_y = ?`,
      [coordX, coordY]
    );
    return rows[0];
  }
}

module.exports = TileRepository;
