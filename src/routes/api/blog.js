const { Router } = require("express");
const { getAllBlog } = require("../../controllers/api");

const router = Router();

router.get("/", getAllBlog);

module.exports = router;
