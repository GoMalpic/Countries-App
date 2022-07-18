const { Router } = require("express");
const router = Router();
const { getCountries, getCountriesId } = require("../controllers/getCountry");

router.get("/", getCountries);
router.get("/:id", getCountriesId);

module.exports = router;
