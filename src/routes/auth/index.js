const { Router } = require("express");

const blog = require("./blog");
const dashboard = require("./dashboard");

const router = Router();

router.use("/signup", signup);
router.use("/login", login);

module.exports = router;
