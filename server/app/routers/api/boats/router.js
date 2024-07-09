const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const tileExist = require("../../../services/tileExists");
const { browse, edit } = require("../../../controllers/boatActions");

router.get("/", browse);

router.put("/:id", tileExist, edit);

/* ************************************************************************* */

module.exports = router;
