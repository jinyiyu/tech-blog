const { Router } = require("express");

const blog = require("./blog");

const router = Router();

router.use("/blog", blog);

module.exports = router;
