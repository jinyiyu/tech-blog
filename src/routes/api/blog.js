const { Router } = require("express");
const { getAllBlogs, createBlog, getBlog } = require("../../controllers/api");

const router = Router();

router.get("/", getAllBlogs);
router.get("/:id", getBlog);
router.post("/", createBlog);

module.exports = router;
