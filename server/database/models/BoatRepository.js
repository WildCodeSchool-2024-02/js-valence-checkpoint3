const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats and their associated tiles
    const [rows] = await this.database.query(
      `SELECT 
         boat.id as id, 
         boat.name as name, 
         boat.coord_x as coord_x, 
         boat.coord_y as coord_y, 
         tile.id as tile_id, 
         tile.type as type, 
         tile.has_treasure as has_treasure 
       FROM ${this.table} 
       JOIN tile 
       ON boat.coord_x = tile.coord_x 
       AND boat.coord_y = tile.coord_y`
    );

    // Return the array of boats with their associated tile information
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
