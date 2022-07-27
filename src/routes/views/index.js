const { Router } = require("express");
const {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
  renderDashboardPage,
} = require("../../controllers/views");

const router = Router();

router.get("/", renderHomePage);
router.get("/", renderLoginPage);
router.get("/", renderSignUpPage);
router.get("/", renderDashboardPage);

module.exports = router;
