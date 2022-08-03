const { Router } = require("express");
const {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
  renderDashboardPage,
  renderCreateBlogPage,
  renderviewBlogPage,
} = require("../../controllers/views");

const router = Router();

router.get("/", renderHomePage);
router.get("/login", renderLoginPage);
router.get("/signup", renderSignUpPage);
router.get("/dashboard", renderDashboardPage);
router.get("/createBlog", renderCreateBlogPage);
router.get("/viewBlog/:id", renderviewBlogPage);

module.exports = router;
