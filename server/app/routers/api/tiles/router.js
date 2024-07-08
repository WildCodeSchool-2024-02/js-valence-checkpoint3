const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, update } = require("../../../controllers/tileActions");
const tileExists = require("../../../services/tileExists");

router.get("/", browse);
router.put("/:id", tileExists, update);


/* ************************************************************************* */

module.exports = router;
