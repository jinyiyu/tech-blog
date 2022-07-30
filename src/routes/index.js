const { Router } = require("express");

const views = require("./views");
const api = require("./api");

const router = Router();

router.use("/", views);
router.use("/api", api);

module.exports = router;
