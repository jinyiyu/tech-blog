const { Router } = require("express");
const { getMyDashboard } = require("../../controllers/dashboard");

const router = Router();

router.get("/", getMyDashboard);

module.exports = router;
