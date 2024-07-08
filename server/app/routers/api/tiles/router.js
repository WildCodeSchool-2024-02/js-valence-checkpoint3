const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse } = require("../../../controllers/tileActions");

const tileExists = require("../../../services/tileExists");

router.get("/", browse);
router.post("/", tileExists);

/* ************************************************************************* */

module.exports = router;
