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
router.get("/", renderLoginPage);
router.get("/", renderSignUpPage);
router.get("/", renderDashboardPage);
router.get("/", renderCreateBlogPage);
router.get("/", renderviewBlogPage);

module.exports = router;
