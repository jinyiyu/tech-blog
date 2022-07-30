const { Router } = require("express");

const blog = require("./blog");
const dashboard = require("./dashboard");

const router = Router();

router.use("/blog", blog);
router.use("/dashboard", dashboard);

module.exports = router;
