const { Router } = require("express");

const views = require("./views");
const api = require("./api");
const auth = require("./auth");

const router = Router();

router.use("/", views);
router.use("/api", api);
router.use("/auth", auth);

module.exports = router;
