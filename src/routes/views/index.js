const { Router } = require("express");
const { renderHomePage } = require("../../controllers/views");

const router = Router();

router.get("/", renderHomePage);

module.exports = router;
