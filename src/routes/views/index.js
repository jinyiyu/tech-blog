const { Router } = require("express");
const {
  renderHomePage,
  renderLoginPage,
  renderSignUpPage,
} = require("../../controllers/views");

const router = Router();

router.get("/", renderHomePage);
router.get("/", renderLoginPage);
router.get("/", renderSignUpPage);

module.exports = router;
