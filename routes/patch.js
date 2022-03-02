const express = require('express')
const auth = require("../middleware/auth");
const router = express.Router()


router.get("/", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});
module.exports = router;