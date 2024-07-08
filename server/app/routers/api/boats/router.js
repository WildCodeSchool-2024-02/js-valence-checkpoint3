const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { browse, read, edit } = require("../../../controllers/boatActions");

router.get("/", browse);
router.get("/:id", read);
router.put("/:id", edit);

/* ************************************************************************* */

module.exports = router;
