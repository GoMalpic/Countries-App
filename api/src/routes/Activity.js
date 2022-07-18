const { Router } = require("express");
const router = Router();
const {
  postActivity,
  getActivity,
  getActivityAll,
} = require("../controllers/activity");

router.post("/", postActivity);
router.get("/getAct", getActivity);
router.get("/getAct/all", getActivityAll);

module.exports = router;
