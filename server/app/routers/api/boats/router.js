const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, read, edit } = require("../../../controllers/boatActions");
const tileExists = require("../../../services/tileExists");

router.get("/", browse);
router.get("/:id", read);
router.put("/:id", tileExists, edit);

/* ************************************************************************* */

module.exports = router;
